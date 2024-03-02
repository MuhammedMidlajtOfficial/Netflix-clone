import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const options = {
 params : {
  include_audit : 'false',
  include_video : 'truee',
  language : 'en-UG',
  page : '1',
  sorted_by : 'popularity.desc'
 },
 headers : {
  accept : 'application/json',
  Authorization : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTI4MTljNTM2OTVmYzllN2NiOGUyNjliNDAyZTViOSIsInN1YiI6IjY1Y2I3OGFlMTNhZjVmMDE4NDU3NDRiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YPtoXplcQteC9erKp4jj0Y9SS0pCCKb_HedA40yPZmo'
 }
}
const APIURL:string = 'https://api.themoviedb.org/3/discover/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  http = inject(HttpClient)

  constructor() { }

  getMovies(){
    return this.http.get(APIURL, options)
  }

  getTvShows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv', options)
  }

  getRatedMovies() {
    return this.http.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }
}
