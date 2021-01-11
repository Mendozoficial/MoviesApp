import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peliculasapp';

  constructor( private moviesServices: MovieService ){
    this.moviesServices.getBillboar()
    .subscribe( resp => {
      console.log( resp );
      
    })
  }
}
