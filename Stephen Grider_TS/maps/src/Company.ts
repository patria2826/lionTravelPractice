import faker from "faker";
import { Mappable } from "./Mappable";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `<h3>Company Name: ${this.companyName}</h3> Catch phrase: ${this.catchPhrase}`;
  }
}
