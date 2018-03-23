import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import { AdvisoriesService } from '../advisories.service';
import { elementAt } from 'rxjs/operator/elementAt';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  advisory: any;
  coment :any;
  comment : {};
  comentar :any;
  cont:any;
  comentid :any;
  answers :any;
  ans :any;
  id;
  like:number;
  dislike:number;
  re:any;
  
  constructor(private http: Http, private route: ActivatedRoute, private advisoriesService: AdvisoriesService) {

  }

  ngOnInit() {
    this.getAdvisoryByIduser()
    this.sendDislike(),
    this.sendLike()
    this.getAdvisorycommentById()
    this.getAdvisorycommentcontById()
    
  }

  getAdvisoryByIduser() {
    this.route.params.forEach((params: Params) => {
      this.id = params['advisoryId'];

      this.advisoriesService.getAdvisoriesId(this.id).subscribe((advisories) => {
        this.advisory = advisories;
      });
    });
  }

  sendDislike(){
    this.route.params.forEach((params: Params) => {
      let id = params['advisoryId'];
    this.advisoriesService.postDislikes(id).subscribe(data => {
      this.dislike = data;
      this.advisory=data;
      });
    });
  }


  sendLike(){
    this.route.params.forEach((params: Params) => {
      let id = params['advisoryId'];
    this.advisoriesService.postLikes(id).subscribe(data => {
      this.like = data;
      this.advisory=data;
      });
    });
  }

  getAdvisorycommentById() {
    this.route.params.forEach((params: Params) => {
      let id = params['advisoryId'];
      this.advisoriesService.getAdvisoriesComentarios(id).subscribe((advisories) => {
        this.coment = advisories;
           

         
        this.coment.forEach((element, index) => {
          let commentId = this.coment[index].id;
          this.advisoriesService.getAdvisoriesComentariosRespuestas(commentId).subscribe(data => {
            this.ans = data;
            this.coment[index].res = [];
            this.coment[index].res = data;
          });
        });

      });
    });
  }

  getAdvisorycommentcontById() {
    this.route.params.forEach((params: Params) => {
      let id = params['advisoryId'];
      this.advisoriesService.getAdvisoriesComentarioscont(id).subscribe((advisories) => {
        this.cont = advisories;         
      });
    });
  }

  

 
}



