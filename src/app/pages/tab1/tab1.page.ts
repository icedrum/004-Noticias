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
    this.cargarNoticias() ;
  }


  loadData(event){
    console.log(event);
    this.cargarNoticias(event);
  }


  cargarNoticias(elevento?){
    
    this.noticiasService.getTopHeadlines().subscribe(
      (resp) => { 
    
        

        if (resp.articles.length === 0){
          
          if (elevento){
            elevento.target.disable=true;
            elevento.target.complete();
           
            console.log('cero');
            return;
          }
        }


        this.lasnoticias.push(...resp.articles);

        if (elevento){
          elevento.target.complete();
          console.log('comple');                                                                                                                                                                                                                               
        }
      }
    );
  }
}
