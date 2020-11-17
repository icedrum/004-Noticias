import { Component,Input, OnInit } from '@angular/core';
import { Article } from 'src/app/pages/interfaces/interfaces';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() unanoticia:  Article;
  @Input()  elindice: number;


  constructor() { }

  ngOnInit() {}

}
