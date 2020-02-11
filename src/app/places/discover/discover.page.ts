import { Component, OnInit } from '@angular/core';
import { PlacesServiceService } from '../places-service.service';
import { Place } from '../place.model';
import { SegmentChangeEventDetail } from '@ionic/core';

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
  segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }

}
