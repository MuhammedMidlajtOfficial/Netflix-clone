import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from 'src/app/shared/services/auth.service';
import { MovieService } from '../../shared/services/movie.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit{
  auth = inject(AuthService)
  movieService = inject(MovieService)

  name = JSON.parse(sessionStorage.getItem('loggedUser')!).name
  email = JSON.parse(sessionStorage.getItem('loggedUser')!).email
  imgUrl = JSON.parse(sessionStorage.getItem('loggedUser')!).picture

  ngOnInit(): void {
      this.movieService.getMovies()
        .subscribe((res)=>{
          console.log(res);
        })
  }

  signOut(){
    sessionStorage.removeItem('loggedUser')
    this.auth.signOut()
  }
}
