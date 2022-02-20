import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-team2',
  templateUrl: './team2.component.html',
  styleUrls: ['./team2.component.css']
})
export class TeamComponent2 implements OnInit {

  constructor(private translateService: TranslateService) { 
    

  }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name': '','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/angular.jpg'},
    {'id':2,'name':'Learn Typescript','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/typescript.jpg'},
    {'id':3,'name':'Learn Nodejs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/nodejs.jpg'},
    {'id':4,'name':'Learn Reactjs','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/reactjs.jpg'},
  ]
}
