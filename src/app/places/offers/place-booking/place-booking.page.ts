import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { NavController } from '@ionic/angular';
import { PlacesServiceService } from '../../places-service.service';

@Component({
  selector: 'app-place-booking',
  templateUrl: './place-booking.page.html',
  styleUrls: ['./place-booking.page.scss'],
})
export class PlaceBookingPage implements OnInit {
  place: Place;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placeService: PlacesServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parmMap => {
      if(!parmMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placeService.places.find(p => p.id === parmMap.get('placeId'));
    });
  }

}
