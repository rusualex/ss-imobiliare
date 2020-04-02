export class Apartment {
  id: number;
  pictureFileName: string;
  name: string;
  details: string;
  owner: string;
  price: string;
  mapLink: string;


  constructor(id: number, pictureFileName: string, name: string, details: string, owner: string, price: string, mapLink: string) {
    this.id = id;
    this.pictureFileName = pictureFileName;
    this.name = name;
    this.details = details;
    this.owner = owner;
    this.price = price;
    this.mapLink = mapLink;
  }
}
