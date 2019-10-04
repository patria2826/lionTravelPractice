// import { UserProps } from "./User";

export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    // Take
    // interface UserProps {
    //     id?: number;
    //     name?: string;
    //     age?: number;
    //   }
    // for example:
    // type of key would be one of 'id','name' and 'age'
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

// const person: UserProps = { id: 1, name: "Nancy", age: 20 };
// const example = new Attributes<UserProps>(person);
// const sth = example.get("id");
