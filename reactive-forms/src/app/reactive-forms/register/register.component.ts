import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'rf-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      passwordConfirmation: new FormControl('')
    });
  }

  public save(){
    console.log(this.userForm.value);
  }
}
