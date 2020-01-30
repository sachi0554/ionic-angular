import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesServiceService } from '../../places-service.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  place: Place;
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private placeService: PlacesServiceService) { }

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
   this.navCtrl.navigateBack('/places/tabs/discover');
  }

 }
