import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PersistFormService {
  cadastros: Array<object> = [];

  constructor() {}

  downloadForm(value: JSON) {
    this.cadastros.push(value);
    console.log(this.cadastros);
  }
}
