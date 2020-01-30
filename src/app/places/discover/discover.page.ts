import { Component, OnInit } from '@angular/core';
import { PlacesServiceService } from '../places-service.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadPlaces: Place[] ;
  constructor(private placesService: PlacesServiceService) { }

  ngOnInit() {
    this.loadPlaces = this.placesService.places;
  }

}
