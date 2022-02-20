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
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
}
