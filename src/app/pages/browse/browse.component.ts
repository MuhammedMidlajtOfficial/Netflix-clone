import { Component, inject, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/services/auth.service';
import { MovieService } from '../../shared/services/movie.service';
import { IVideoContent } from 'src/app/shared/models/video-content.interface';
import { forkJoin, map, Observable } from 'rxjs';

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
  bannerDetails = new Observable<any>()
  bannerVideo = new Observable<any>()

  movies:IVideoContent[] = []
  tvShows:IVideoContent[] = []
  ratedMovies:IVideoContent[] = []
  nowPlaying:IVideoContent[] = []
  upcoming:IVideoContent[] = []
  popular:IVideoContent[] = []
  topRated:IVideoContent[] = []

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated(),
  ]

  ngOnInit(): void {
    forkJoin(this.sources)
    .pipe(
      map(([movies, tvShows, nowPlaying, upcoming, popular, topRated])=>{
        this.bannerDetails = this.movieService.getBannerDetail((movies as any).results[0].id)
        this.bannerVideo = this.movieService.getBannerVideo((movies as any).results[0].id)
        console.log(this.bannerVideo);
        
        return { movies, tvShows, nowPlaying, upcoming, popular, topRated }
      })
    ).subscribe((res:any) =>{
      this.movies = res.movies.results as IVideoContent[];
      this.tvShows = res.tvShows.results as IVideoContent[];
      this.nowPlaying = res.nowPlaying.results as IVideoContent[];
      this.upcoming = res.upcoming.results as IVideoContent[];
      this.popular = res.popular.results as IVideoContent[];
      this.topRated = res.topRated.results as IVideoContent[];
    })
  }

  signOut(){
    sessionStorage.removeItem('loggedUser')
    this.auth.signOut()
  }
}
