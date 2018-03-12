'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) {
    app.io = require('socket.io')(app.start());
    app.io.on('connection', (socket) => {
      // socket.broadcast.emit('new user',
      // {message: 'Ha entrado un usuario al Chat'});
      socket.on('join', roomId => {
        console.log('joining roomId', roomId);
        socket.join(roomId);
      });
      socket.on('leave', roomId =>{
        if (roomId != undefined) {
          socket.leave(roomId);
          console.log('room left', roomId);
        }
      });
      socket.on('room message', message => {
        app.models.messageRoom.create([
          {
            'usuarioId': message.usuarioId,
            'message': message.message,
            'RoomId': message.room,
          },
        ]).then(mensaje=>{
          console.log('mensaje insertado:', mensaje);
          app.models.usuario.findById(message.usuarioId).then(resp=>{
            message.username = resp.username;
            app.io.to(message.room).emit('user says', message);
          });
        });
      });
      socket.on('personal message', message => {
        var idChat;
        (message.senderId > message.receptorId) ? idChat = message.receptorId * 10 + message.senderId : idChat = message.senderId * 10 + message.receptorId;
        console.log(idChat);
        console.log(message);
        app.models.userMessage.create([
          {
            'idProper': idChat,
            'message': message.message,
            'senderId': message.senderId,
          },
        ]).then(mensaje=>{
          console.log('mensaje insertado:', mensaje);
          app.models.usuario.findById(message.senderId).then(resp=>{
            message.username = resp.username;
            app.io.to(idChat).emit('user says', message);
          });
        });
      });
      socket.on('disconnect', () => {
        console.log('Ha salido un usuario del Chat');
        socket.broadcast.emit('bye bye user',
        {message: 'Ha salido un usuario del Chat'});
      });
    });
  }
});
