import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { NewsService } from '../news.service';
import { UserService } from '../../../@core/data/users.service';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  idUser = environment.userId;
  news: any;
  user: any;
  commentById: any = [];
  answers: any;
  contentAnswer: any;
  count: any;
  idNews: any;
  contentUser: any;
  like: number;
  dislike: number;
  position:string;
  
  comment: any = {};
  answer: any = {};

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService,
    private userService: UserService) {

  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.idNews = params['newsId'];
    });
    this.getNewsById();
    this.getNewsCommentById();
    this.getNewsCommentCount();
  }

  getNewsById() {
    this.newsService.getById(this.idNews).subscribe(data => {
      data ? this.news = data : '';
    });
  }

  getNewsCommentById() {
    this.newsService.getNewsComment(this.idNews).subscribe(data => {
      this.commentById = data;
      this.commentById.forEach((element, index) => {
        this.position = index;
        let commentId = this.commentById[index].id;
        let contentId = this.commentById[index].userId;
        this.newsService.getNewsAnswer(commentId).subscribe(data => {
          this.answers = data;
          this.commentById[index].res = [];
          this.commentById[index].res = data;
        });
        /*
        this.userService.getById(contentId).subscribe(data => {
          this.contentUser = data;
        });
        */
      });
    });
  }

  sendAnswer(event) {
    this.contentAnswer = event.target.parentNode.parentNode.childNodes[3].value;
    let id = event.target.parentNode.parentNode.childNodes[3].id;
    let index = event.target.parentNode.parentNode.childNodes[3].name;
    this.answer.comentarioNoticiaId = id;
    this.answer.userId = this.idUser;
    this.answer.contenido = this.contentAnswer;
    this.newsService.postNewsAnswer(this.answer.comentarioNoticiaId, this.answer).subscribe(data => {
      this.commentById[index].res.push(data);
      //console.log(this.commentById[index].res)
    });
  }

  getNewsCommentCount() {
    this.newsService.getNewsCommentCount(this.idNews).subscribe(data => {
      this.count = data;
      //console.log(this.count);
    });
  }


  sendDislike() {
    this.newsService.postDislikes(this.idNews).subscribe(data => {
      this.dislike = data;
      this.news = data;
    });
  }

  sendLike() {
    this.newsService.postLikes(this.idNews).subscribe(data => {
      this.like = data;
      this.news = data;
    });
  }

  sendComent() {
    this.comment.userId = this.idUser;
    this.comment.noticiaId = this.idNews;
    this.newsService.postNewsComment(this.comment.noticiaId, this.comment).subscribe(data => {
      document.getElementById('comments').value = "";
    });
  }

}
