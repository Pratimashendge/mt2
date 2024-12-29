import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from '../models/movies';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
@Input()movieobj!:Imovies
  constructor() { }

  ngOnInit(): void {
  }

}
