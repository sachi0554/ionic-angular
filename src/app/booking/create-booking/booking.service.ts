import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({providedIn: 'root'})
export class BookinService {

    // tslint:disable-next-line: variable-name
    private _bookings: Booking[] = [
        {
           Id: '1',
           placeId: '2',
           userId: '1244',
           placeTitle: 'New Place',
           guestNumber: 2
        },
        {
            Id: '2',
            placeId: '1',
            userId: '0554',
            placeTitle: 'love place',
            guestNumber: 2
         }
    ];

    get bookings() {
        return [...this._bookings];
    }
}