import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatSnackBarModule,MatCardModule, MatButtonModule, MatToolbarModule, MatInputModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarRatingModule} from 'ngx-bar-rating';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movie.service';
import { MoviesComponent } from './movies/movies.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
   
    DashboardComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule, 
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    BarRatingModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }