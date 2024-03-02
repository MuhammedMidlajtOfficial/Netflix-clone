import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel.component';

import { DescriptionPipe } from './shared/pipes/description.pipe';
import { RatingPipe } from './shared/pipes/rating.pipe';
import { ImagePipe } from './shared/pipes/image.pipe';


const routes:Routes = [
  { path:'' , component : LoginComponent },
  { path:'browse' , component : BrowseComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    BrowseComponent,
    BannerComponent,
    MovieCarouselComponent,
    DescriptionPipe,
    RatingPipe,
    ImagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ provideAnimations() ],
  bootstrap: [AppComponent]
})
export class AppModule { }
