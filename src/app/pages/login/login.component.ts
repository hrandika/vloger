import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginFormGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {}

  public onSubmit(): void {}
}
