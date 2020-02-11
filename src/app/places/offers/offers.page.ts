import { Component, OnInit } from '@angular/core';
import { PlacesServiceService } from '../places-service.service';
import { Place } from '../place.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];
  constructor(private placeService: PlacesServiceService , private router: Router) { }

  ngOnInit() {
    this.offers = this.placeService.places;
  }
  onEdit(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id]);
    console.log(id);
  }

}
