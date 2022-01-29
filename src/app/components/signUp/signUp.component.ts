import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
   
 
@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: [ './signUp.component.css' ]
})
export class SignUpComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
