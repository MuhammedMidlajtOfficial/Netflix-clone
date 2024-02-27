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
  Authorization : ' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTI4MTljNTM2OTVmYzllN2NiOGUyNjliNDAyZTViOSIsInN1YiI6IjY1Y2I3OGFlMTNhZjVmMDE4NDU3NDRiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YPtoXplcQteC9erKp4jj0Y9SS0pCCKb_HedA40yPZmo'
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
}
