import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {


noticiasS : Article[] =[]; 

  constructor(private storage: Storage ) {}


  guardarEnFavoritos(noti: Article){
    this.noticiasS.unshift(noti);
    this.storage.set ( 'favoritos',this.noticiasS); 
  };

  cargarFavoritos(){

  };

}
 