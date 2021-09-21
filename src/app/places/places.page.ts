/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  private places: any[];

  constructor(public placesService: PlacesService) { }

  ngOnInit() {
    this.fetchPlaces();
  }

  ionViewWillEnter() {
    this.fetchPlaces();
  }

  fetchPlaces() {
    this.places = this.placesService.getAllPlaces();
  }
}
