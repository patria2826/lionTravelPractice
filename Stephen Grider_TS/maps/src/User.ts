import faker from "faker";
import { Mappable } from "./Mappable";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;

    // you have to initialize object like this if you didn't do the declaration and initialization synchronously
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `<h3>User Name: ${this.name}</h3>`;
  }
}
