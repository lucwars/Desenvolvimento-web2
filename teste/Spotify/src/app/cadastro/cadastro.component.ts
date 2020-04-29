import { PersistFormService } from "./../services/download-form-fields.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { emailValidator } from "./validator";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  myForm: FormGroup;
  successMsg: boolean = false;

  constructor(private fb: FormBuilder, private pfs: PersistFormService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: "",
      emailConfirmation: ["", emailValidator],
      password: "",
      username: "",
      dayOfBirth: "",
      monthOfBirth: "",
      yearOfBirth: "",
      gender: "",
    });

    this.myForm.controls.email.valueChanges.subscribe((x) =>
      this.myForm.controls.emailConfirmation.updateValueAndValidity()
    );
  }

  onSubmit(): void {
    this.successMsg = true;
    this.pfs.downloadForm(this.myForm.value);
    this.reset();
  }

  reset() {
    this.myForm.reset();
  }
}
