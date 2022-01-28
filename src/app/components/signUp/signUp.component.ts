import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { ServicesService } from 'src/app/services/services.service';
  
@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: [ './signUp.component.css' ]
})
export class SignUpComponent implements OnInit   {
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ServicesService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Comment: new FormControl('', [Validators.required])
    });
  }


  onSubmit(FormData: FormGroup) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'tala.1997.az@gmail.com'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}