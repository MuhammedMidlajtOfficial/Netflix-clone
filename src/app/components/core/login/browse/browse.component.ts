import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent {
  auth = inject(AuthService)
  name = JSON.parse(sessionStorage.getItem('loggedUser')!).name
  email = JSON.parse(sessionStorage.getItem('loggedUser')!).email
  imgUrl = JSON.parse(sessionStorage.getItem('loggedUser')!).picture

  signOut(){
    sessionStorage.removeItem('loggedUser')
    this.auth.signOut()
  }
}
