import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
 place: Place;
  constructor() { }

  ngOnInit() {
    console.log(this.place);
  }

}
