import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, retry } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import {Movie} from '../movie';

@Injectable()
export class MovieService {

  search(search : string): Observable<Movie>{
    let endpoint:string = `https://api.themoviedb.org/3/search/movie?api_key=432c0afd509bb2221799f0d7c39c2141&query=${search}&include_adult=false&language=en-US`;
    return this.http.get<Movie>(endpoint).map(res =>res['results'])
  }

  addRating(movie: Movie){
    
    let newRating = {
      movieId: movie.id,
      stars: movie.overall_rating
    }
    return this.http.post("http://localhost:8080/rating",newRating);

  }


  addMovie(movie: Movie){
    console.log(movie);
    let newMovie ={
      title: movie.title,
      poster_path: movie.poster_path,
      backdrop_path:movie.backdrop_path,
      overview:movie.overview
    };
    return this.http.post("http://localhost:8080/movie",newMovie);
  }
  getMovies() : Observable<Movie[]> {
    return this.http.get<Movie[]>("http://localhost:8080/movie");
  }

  constructor(private http:HttpClient) { }

}

