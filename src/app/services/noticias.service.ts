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

  constructor(private http: HttpClient) { }


  private ejecutarQuery<T>( querystring : string) {
    querystring=apiUrl + querystring;
    
      return this.http.get<T>(querystring,  {headers});
  }; 


  getTopHeadlines(){
   
    return this.ejecutarQuery<RespuestaTopHeadLines>('/top-headlines?country=us');
   // return this.http.get<T>('https://newsapi.org/v2/top-headlines?country=us&apiKey=b281a20a35204f42a2c6e69d63c4117c');

  }


  getTopHeadlinesCategoria(categoria: string){
    //('https://newsapi.org/v2/top-headlines?country=us&apiKey=b281a20a35204f42a2c6e9d63c4117c');
    categoria='/top-headlines?country=us&category='+categoria;
    console.log( categoria );
    return this.ejecutarQuery<RespuestaTopHeadLines>(categoria);
    
  }


}
