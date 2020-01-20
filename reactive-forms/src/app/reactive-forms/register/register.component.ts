import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  private save(): void {
    this.user = Object.assign({}, this.user, this.userForm.value);
    console.log(this.user);
  }

  private getFieldClass(field:string){
    let notTouchedAndDiry = !this.userForm.get(field).touched && !this.userForm.get(field).dirty;

    if(notTouchedAndDiry)
      return '';

    return this.hasError(field) ? 'is-invalid': 'is-valid'; 
 }

  private hasError(field: string): boolean {
    return this.userForm.get(field).errors && (this.userForm.get(field).touched || this.userForm.get(field).dirty);
  }

  private hasNoError(field: string): boolean{
    return !this.userForm.get(field).errors && (this.userForm.get(field).touched && this.userForm.get(field).dirty);
  }

  private notValid() : boolean {
    return this.userForm.invalid;
  }
}
