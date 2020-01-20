import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { User } from '../models/user';

@Component({
  selector: 'rf-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private userForm: FormGroup;
  private user: User;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
      passwordConfirmation: ['']
    });
  }

  public save(){
    this.user = Object.assign({}, this.user, this.userForm.value);
    console.log(this.user);
  }
}
