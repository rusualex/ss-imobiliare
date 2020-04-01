export class Apartment {
  pictureFileName: string;
  name: string;
  details: string;
  owner: string;
  price: string;


  constructor(pictureFileName: string, name: string, details: string, owner: string, price: string) {
    this.pictureFileName = pictureFileName;
    this.name = name;
    this.details = details;
    this.owner = owner;
    this.price = price;
  }
}
