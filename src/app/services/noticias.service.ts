import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaTopHeadLines } from '../pages/interfaces/interfaces';


const apikey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers =  new HttpHeaders({
  'X-Api-Key': apikey
});



@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  headlinesPage = 0;
  categoriaActual='';
  cartegoriaPage=0;

  constructor(private http: HttpClient) { }


  private ejecutarQuery<T>( querystring : string) {
    querystring=apiUrl + querystring;
    
      return this.http.get<T>(querystring,  {headers});
  }; 


  getTopHeadlines(){
    var encabe: string = "";
    
    this.headlinesPage++;
    encabe='/top-headlines?country=us&page=' + this.headlinesPage.toString();
   
    return this.ejecutarQuery<RespuestaTopHeadLines>(encabe);
   // return this.http.get<T>('https://newsapi.org/v2/top-headlines?country=us&apiKey=b281a20a35204f42a2c6e69d63c4117c');
    
  }


  getTopHeadlinesCategoria(categoria: string){
    
    if (this.categoriaActual === categoria){
      this.cartegoriaPage++ 
    } else {
      this.categoriaActual=categoria;
      this.cartegoriaPage=1;
    }
    
    //('https://newsapi.org/v2/top-headlines?country=us&apiKey=b281a20a35204f42a2c6e9d63c4117c');
    categoria='/top-headlines?country=us&category='+categoria;
    categoria=categoria + "&page=" + this.cartegoriaPage.toString();
    console.log( categoria );
    return this.ejecutarQuery<RespuestaTopHeadLines>(categoria);
    
  }


}
