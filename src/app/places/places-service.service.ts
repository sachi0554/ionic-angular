import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesServiceService {
  private _places: Place[] = [
    // tslint:disable-next-line: max-line-length
    new Place(
    '1', 
    'UdaiPur', 
    'Its beautiful fort place and history', 
    'https://t2.gstatic.com/images?q=tbn:ANd9GcRlxcTmcVRUoCeruGBm27YeRSSqhnpfYu7a2jAQEq8AfBEbVOkzuHkJmJql58kZcDIIW7toe1O9YMz6pQ', 
    556),
    new Place(
      '2', 
      'Saharjaha', 
      'Its  fort place and history', 
      'https://t1.gstatic.com/images?q=tbn:ANd9GcS9g6cDZHtJAueIgrdJjtHSyVgB3YVOULEWh5c0_CUGd7hJrqE2FL6DKAFM9wuzZKvu91LkdEsKpGmgjA', 
      145),
      new Place(
        '3', 
        'Ukil Las', 
        'Its  love place', 
        'https://t1.gstatic.com/images?q=tbn:ANd9GcRcqpnPGiSRuVvS9bbJvkBDfGNf-yOrJvzE2W-z6jQiuxxroeeUXyr2TS3-DM32Nr6J7rNcZVRQWp8q2g', 
        186)
  ];

  get places() {
    return [...this._places];
  }
  constructor() { }
}
