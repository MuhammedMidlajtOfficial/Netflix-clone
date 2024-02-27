import { Component, Input, inject } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  auth = inject(AuthService)

  @Input({ required : true }) profileUrl : string = '';
  @Input({ required : true }) userName : string = '';

  navList:string[] = ['Home', 'TV shows', 'New & Popular', 'My list', 'Browse by language']

  signOut(){
    sessionStorage.removeItem('loggedUser')
    this.auth.signOut()
  }
}
