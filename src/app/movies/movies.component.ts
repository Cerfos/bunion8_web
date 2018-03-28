import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {

  movies : Array<Movie>
  rate=5;

  updateRating(movie: Movie){
    console.log(movie);
    this.movieService.addRating(movie).subscribe();
  }

  outputData(){
    console.log(this.movies)
  }

  getMovies(){
    this.movieService.getMovies()
    .subscribe(data => this.movies = data);
  }
 
  constructor(private movieService : MovieService) { }
 
  ngOnInit() {
    this.getMovies();
  }

 

}
