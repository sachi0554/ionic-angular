import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
 place: Place;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.place);
  }
  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
  onBookPlace() {
    this.modalCtrl.dismiss({message:'this place booked'}, 'confirm');
  }

}
