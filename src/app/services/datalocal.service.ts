import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {


noticiasS : Article[] =[]; 

  constructor(private storage: Storage ) {
    this.cargarFavoritos();
  }


  guardarEnFavoritos(noti: Article){

    const existe = this.noticiasS.find(notic => notic.title === noti.title);

    if (!existe){
      this.noticiasS.unshift(noti);
      this.storage.set ( 'favoritos',this.noticiasS); 
    }  
  };

  async cargarFavoritos(){
    //this.storage.get('favoritos').then(favoritos=> { console.log('favor: ',favoritos)} );

    const favoritos = await this.storage.get('favoritos');
    console.log('los fav',favoritos);
    if (favoritos) {    this.noticiasS=favoritos};
  };

}
 