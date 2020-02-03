import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authServer: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }


  onlogin() {
    console.log('--------------------')
    this.authServer.login();
    this.router.navigateByUrl('/places/tabs/discover');
  }

}
