import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footbar",
  templateUrl: "./footbar.component.html",
  styleUrls: ["./footbar.component.css"]
})
export class FootbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getTodayDate(): String {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    return dd + "/" + mm + "/" + yyyy;
  }
}
