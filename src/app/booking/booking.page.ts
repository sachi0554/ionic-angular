import { Component, OnInit } from '@angular/core';
import { Booking } from './create-booking/booking.model';
import { BookinService } from './create-booking/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  loadingBooking: Booking[];
  constructor(private bookingService: BookinService) { }

  ngOnInit() {
    this.loadingBooking = this.bookingService.bookings;
  }

}
