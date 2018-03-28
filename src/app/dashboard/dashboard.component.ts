import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { Movie} from '../../movie'
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  movies;
  searchTerm:string;
  search(){
    this.movieService.search(this.searchTerm).subscribe(movies =>
    {
      console.log(movies);
      this.movies = movies;
    });
  }

  addMovie(movie:Movie){
    this.movieService.addMovie(movie).subscribe();
    this.snackBar.open(' ${movie.title} added to database',"Dismiss", {duration:2000})
  }

  constructor(private movieService : MovieService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

}
