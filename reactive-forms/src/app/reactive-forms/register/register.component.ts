import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'rf-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private userForm: FormGroup;

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
    console.log(this.userForm.value);
  }
}
