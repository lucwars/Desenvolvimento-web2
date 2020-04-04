import { Component, OnInit } from "@angular/core";

import { FormBuilder, FormGroup, AbstractControl } from "@angular/forms";

import { emailValidator } from "./validator";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

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

  onSubmit(): void {}

  reset() {
    this.myForm.reset();
  }
}
