import {Component, OnInit} from '@angular/core';
import {Apartment} from "../../model/apartment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apartments: Array<Apartment> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.apartments.push({ id: 1,pictureFileName: "app.jpg", name: "Apartment for Rent in Manastur", details: "Very nice zone, 3 Rooms and balcony.", owner: "Popescu Ioan", price:"350€"},
      {id: 2,pictureFileName: "studio.jpg", name: "Studio Apartment", details: "Perfect for Students", owner: "Maria Anca", price:"250€"},
      {id: 3,pictureFileName: "studio2.jpg", name: "Studio Apartment", details: "Good view over the city", owner: "John John", price:"300€"},
      {id: 4,pictureFileName: "2room.jpg", name: "2 Room Apartment in City Center", details: "Very nice positioning.", owner: "Pop Teo", price:"450€"},
      {id: 5,pictureFileName: "balcony.jpg", name: "Apartment with balcony", details: "Wonderful balcony with wonderful view.", owner: "Maria Anca", price:"375€"},
      {id: 6,pictureFileName: "1room.jpg", name: "1 Room in an Apartment", details: "Searching for a student flatmate.", owner: "Theodor Ferdinand", price:"150€"},
      {id: 7,pictureFileName: "house.jpg", name: "House for Rent", details: "A house with 4 rooms and 2 floors.", owner: "Pop Teo", price:"650€"},
      {id: 8,pictureFileName: "3room.jpg", name: "Apartment for Rent in Marasti", details: "Very friendly neighborhood", owner: "John John", price:"350€"})
  }

}
