declare var google:any;
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private router = inject(Router)

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id : '603440201961-12713bspsr2asl01n8c4epr7riqmfuul.apps.googleusercontent.com',
      callback : (res : any)=> this.handleLogin(res)
    })

    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme : 'filled_blue',
      size : 'large',
      shape : 'rectangle',
      width : 350
    })
  }

  private decodeToken (token:string){
    if(token){
      return JSON.parse(atob(token.split(".")[1]))
    }
  }

  handleLogin(response:any){
    if (response) {
      // Decode token
      const payLoad = this.decodeToken(response.credential)
      // Store in session
      sessionStorage.setItem('loggedUser',JSON.stringify(payLoad))
      // navigate to browse/home
      this.router.navigate(['browse'])
    }
  }
}
