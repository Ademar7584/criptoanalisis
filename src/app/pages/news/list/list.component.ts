import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BackendService } from '../../backend.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  news:any;
  table:String = "news";

  constructor(private http: Http) {
    http.request('http://localhost:3000/news').subscribe(
      (resp:Response)=>{
        this.news = JSON.parse(resp['_body']);
        console.log(this.news);
      }
    )
  }

  stringLimit(text,limit){
    return (text.length < limit)? text : text.substr(0,limit);
  }

}
