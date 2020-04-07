import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class PersistFormService {
  cadastros: Array<object> = [];

  constructor() {}

  downloadForm(myForm: FormGroup) {
    this.cadastros.push(myForm.value);
    console.log(this.cadastros);
  }
}
