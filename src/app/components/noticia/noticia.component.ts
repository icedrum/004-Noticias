import { Component,Input, OnInit } from '@angular/core';
import { Article } from 'src/app/pages/interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DatalocalService } from 'src/app/services/datalocal.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() unanoticia:  Article;
  @Input()  elindice: number;


  constructor(private iab: InAppBrowser,
              private actionsheetctr : ActionSheetController,
              private socialSharing: SocialSharing,
              private datalocal: DatalocalService 
              ) { }
 
  ngOnInit() {}


  abrirNoticia(){

    console.log(this.unanoticia.url);
 
    const browser = this.iab.create(this.unanoticia.url,'_system');

    // browser.close();
  }


  async lanzarMenu(){


    const actionSheet = await this.actionsheetctr.create({
      
      //cssClass: 'my-custom-class',
      buttons: [ 
      {
        text: 'Compartir',
        icon: 'share',
        cssClass: 'actdark',
        handler: () => {
          console.log('Share  clicked');
          this.socialSharing.share(this.unanoticia.title,this.unanoticia.source.name,
            '',this.unanoticia.url);
        }
      }, {
        text: 'Favorito',
        icon: 'star',
        cssClass: 'actdark',
        handler: () => {
          console.log('Fav');
          this.datalocal.guardarEnFavoritos(this.unanoticia);
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        cssClass: 'actdark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();


  }


}
