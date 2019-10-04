import axios, { AxiosPromise } from "axios";

export interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}
  // there won't be an ending "/" in rootUrl incase we mess things up when
  // whether we want to update data or add new data

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      // put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // post
      return axios.post(this.rootUrl, data);
    }
  }
}
