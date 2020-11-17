import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article, RespuestaTopHeadLines } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  lasnoticias: Article[]=[];

  constructor(private noticiasService: NoticiasService) {

  }

  ngOnInit(){
    this.noticiasService.getTopHeadlines().subscribe(
      (resp) => { 
        console.log('notcias',resp.articles);
        this.lasnoticias.push(...resp.articles);
      }
    );
  }


}
