/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PlacesService } from 'src/app/services/places/places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: any;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public alertController: AlertController,
    public placesService: PlacesService
  ) { }

  ngOnInit() {
    this.fetchPlaceData();
  }

  fetchPlaceData() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap) {
        alert('No data to display!');
        window.location.href = 'places';
      } else {
        const place_id = paramMap.get('id');
        this.place = this.placesService.getPlace(parseInt(place_id));
      }
    });
  }

  async deletePlace() {
    const deletionAlert = await this.alertController.create({
      header: 'Delete place?',
      message: 'This cannot be undone.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(['/places']);
          }
        }
      ]
    });

    const data = await deletionAlert.present();
  }

}
