import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PlacesServiceService } from '../../places-service.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/booking/create-booking/create-booking.component';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  place: Place;
  constructor(
    private route: ActivatedRoute, 
    private navCtrl: NavController, 
    private placeService: PlacesServiceService,
    private modelCtrl: ModalController
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parmMap => {
      if(!parmMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placeService.places.find(p => p.id === parmMap.get('placeId'));
    });
  }
  onButtonBook() {
   // this.router.navigateByUrl('/places/tabs/discover');
   //this.navCtrl.navigateBack('/places/tabs/discover');
   // tslint:disable-next-line: no-unused-expression
   this.modelCtrl.create({
     component: CreateBookingComponent ,
     componentProps: {place: this.place}
    }).then(modelEle => {
    modelEle.present();
   });
  }

 }
