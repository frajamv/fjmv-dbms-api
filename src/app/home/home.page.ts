/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';

export const DEFAULT_QUERY = "SELECT id AS '#', full_name AS 'Nombres', national_identification AS 'Documento de identidad', email AS 'E-mail', created_at AS 'Creado en' FROM users";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  private query: string;
  private result: any;
  private keys: string[];
  private error_message: any;

  constructor(private data: DataService) { }
  ngOnInit(): void {
    this.query = DEFAULT_QUERY;
    this.fetchDataToDB();
  }

  fetchDataToDB() {
    this.result = null;
    this.error_message = null;
    if (this.query) {
      this.data.getSQLData(this.query).subscribe((res: any) => {
        if (res?.data) {
          this.result = res.data;
          this.keys = Object.keys(this.result[0]);
        }
      }, (error) => {
        console.log("Error: ", error);
        this.error_message = error.error.message;
      });
    }
  }

  getObjectData(row: any, keyindex: number) {
    const value = row[this.keys[keyindex]];
    return value;
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
