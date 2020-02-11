import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  constructor(private authServer: AuthServiceService, private router: Router, private loaderCtrl: LoadingController) { }

  ngOnInit() {
  }


  onlogin() {
    console.log('--------------------')
    this.authServer.login();
    this.loaderCtrl.create({keyboardClose: true, spinner: 'lines'}).then(lodingEl => {
      lodingEl.present();
    });
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.loaderCtrl.dismiss();
      this.router.navigateByUrl('/places/tabs/discover');
    }, 1500);

  }

}
