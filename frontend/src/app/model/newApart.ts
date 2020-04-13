export class newApart {
  id: number;
  pictureFileName: string;
  name: string;
  details: string;
  owner: string;
  price: string;


  constructor(id: number, pictureFileName: string, name: string, details: string, owner: string, price: string) {
    this.id = id;
    this.pictureFileName = pictureFileName;
    this.name = name;
    this.details = details;
    this.owner = owner;
    this.price = price;
  }
}
