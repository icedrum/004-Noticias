import { Component,  ViewChild,OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements  OnInit{

  //@ViewChild(IonSegment) segment: IonSegment;
  @ViewChild(IonSegment) segment: IonSegment;
  noticias: Article[]=[];
  categorias=['business','entertainment','general','health','science','sports','technology'];

  
  constructor(private noticiasservice: NoticiasService) {

  }

 


  ngOnInit(){
    
   // this.segment.value = 'entertainment';  //this.categorias[0];
   this.cargarNoticias(this.categorias[0]); 
 
  }

  ngAfterViewInit(){
    this.segment.value = this.categorias[0];
    
  }

  cambiarCategoria( event){
    this.noticias=[];
    this.cargarNoticias(event.detail.value);

  }


  cargarNoticias(laCategoria: string , evento? ){
    this.noticiasservice.getTopHeadlinesCategoria(laCategoria).subscribe(resp => {
      //console.log(resp);
      
      if (resp.articles.length === 0 ){

        if ( evento){
          evento.target.complete();
          evento.target.disable = true;
        }
        return;
      }
      
      this.noticias.push(...resp.articles);
    
      if ( evento){
        evento.target.complete();
        evento.target.disable = true;
      }
    }) 
  
  }



  loadData(event){
    this.cargarNoticias(    this.segment.value, event );
  }



}
