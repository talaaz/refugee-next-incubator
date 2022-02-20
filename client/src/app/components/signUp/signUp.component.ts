import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { FormsModule } from '@angular/forms'; 
import { PuserService } from '../../services/puser.service'

 
@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: [ './signUp.component.css' ]
})
export class SignUpComponent implements OnInit {
  puser= {
    name:''
  }
  constructor(private puserService: PuserService) { }

  ngOnInit():  void {
  }

  
  createPUser(): void {
    const data = {
      name: this.puser.name,
     };

    this.puserService.addPUser(data)
    .subscribe(
      response => {
        console.log(response);
       },
      error => {
        console.log(error);
      });
  }
  
  
}
