import { AxiosPromise, AxiosResponse } from "axios";
import { HasId } from "./ApiSync";

interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(valus: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  get = this.attributes.get;
  on = this.events.on;
  trigger = this.events.trigger;

  set(update: T): void {
    this.attributes.set(update); //change data
    this.events.trigger("change"); //trigger sth to notify the user simultaneously
  }

  fetch(): void {
    const id = this.get("id");

    if (typeof id === "number") {
      this.sync.fetch(id).then((ressponse: AxiosResponse) => {
        this.set(ressponse.data);
      });
    } else {
      throw new Error("Cannot fetch without an ID.");
    }
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((ressponse: AxiosResponse): void => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("err");
      });
  }
}
