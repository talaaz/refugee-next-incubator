import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import { CollaboratorService } from '../../services/collaborator.service'
 
@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: [ './collaborations.component.css' ]
})
export class CollaborationsComponent implements OnInit   {
 

  collaborator = {
    firstName:'', 
    lastName:'', 
    email:'', 
    comment:'' 
  }
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  constructor(private fb: FormBuilder,private collaboratorService: CollaboratorService) { 


    this.contactForm = fb.group({
        'contactFormName': ['', Validators.required],
        'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
        'contactFormSubjects': ['', Validators.required],
        'contactFormMessage': ['', Validators.required],
        'contactFormCopy': [''],
        });
      }
  



  ngOnInit():  void {
  }

  sendCollaboratorEmail(): void{
      const data={
        firstName: this.collaborator.firstName,
        lastName: this.collaborator.lastName,
        email: this.collaborator.email,
        comment: this.collaborator.comment,
      }

      this.collaboratorService.sendCollaboratorEmail(data)
      .subscribe(
        response => {
          console.log(response);
          this.contactForm.reset();
          this.disabledSubmitButton = true;
         },
        error => {
          console.log(error);
        });
    }
}
 