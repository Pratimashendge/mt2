import { Component } from '@angular/core';
import { Imovies } from './models/movies';
import { movieArray } from './constant/movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mt2';
  movieArray:Array<Imovies>=movieArray;
}
