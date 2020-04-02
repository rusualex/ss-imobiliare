import { Component, OnInit } from '@angular/core';
import {Apartment} from "../../model/apartment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-imobilia',
  templateUrl: './add-imobilia.component.html',
  styleUrls: ['./add-imobilia.component.css']
})
export class AddImobiliaComponent implements OnInit {
  apartment: Apartment= {name:'',
    details:'',
    pictureFileName:'',
    mapLink:'',
    price: '',
    id: null,
    owner: 'User Logged in'
  };
  private fileToUpload: File;

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.apartment.pictureFileName = this.fileToUpload.name;
  }

  submit() {
    console.log(this.apartment);
    this.showSnackbar('You successfully posted!');
    setTimeout(() => {}, 3300);
    this.reloadPage();
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000,
      panelClass: ['snackbar'],
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
