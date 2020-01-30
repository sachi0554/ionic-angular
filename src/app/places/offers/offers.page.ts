import { Component, OnInit } from '@angular/core';
import { PlacesServiceService } from '../places-service.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  offers: Place[];
  constructor(private placeService: PlacesServiceService ) { }

  ngOnInit() {
    this.offers = this.placeService.places;
  }

}
