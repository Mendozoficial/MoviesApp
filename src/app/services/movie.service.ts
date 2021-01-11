import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private  http: HttpClient ) { }


  getBillboar(){
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=5680745daf56781d7831c79b411496c2&language=es-ES&page=1')
  }
  
}
