/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places = [
    {
      id: 1,
      title: 'Eiffel Tower',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/275px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg',
      comments: ['Awesome place', 'Wonderful experience!']
    },
    {
      id: 2,
      title: 'Statue of Liberty',
      imageURL: 'https://cdn.mos.cms.futurecdn.net/XsbvTN6PRi6PZtgEGvRsiE.jpg',
      comments: ['It scares me', 'Its huge!']
    },
    {
      id: 3,
      title: 'Stonehenge',
      imageURL: 'https://cdni.rt.com/actualidad/public_images/2020.07/article/r/1104/90/jpeg/5f22071559bf5b303e28b56d.JPG',
      comments: null
    },
  ];

  constructor() { }

  createPlace(title, imageURL, comments?) {
    const new_place = {
      id: this.places.length + 1,
      title,
      imageURL,
      comments
    };

    this.places.push(new_place);
  }

  getAllPlaces() {
    return [...this.places];
  }

  getPlace(id: number) {
    const found = {
      ...this.places.find(place => place.id === id)
    };
    return found;
  }

  deletePlace(id: number) {
    this.places = this.places.filter(place => place.id !== id);
  }


}
