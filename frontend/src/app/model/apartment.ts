export class Apartment {
  id: string;
  pictureFileName: string;
  name: string;
  details: string;
  owner_id: string;
  price: number;
  mapLink: string;


  constructor(id: string, pictureFileName: string, name: string, details: string, owner_id: string, price: number, mapLink: string) {
    this.id = id;
    this.pictureFileName = pictureFileName;
    this.name = name;
    this.details = details;
    this.owner_id = owner_id;
    this.price = price;
    this.mapLink = mapLink;
  }
}
