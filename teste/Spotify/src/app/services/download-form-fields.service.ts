import { Injectable } from "@angular/core";
import * as FileSaver from "file-saver";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class DownloadFormFieldsService {
  constructor() {}

  downloadForm(myForm: FormGroup) {
    let blob = new Blob([JSON.stringify(myForm.value)], {
      type: "application/json",
    });
    FileSaver.saveAs(blob, "mock-data.json");
  }
}
