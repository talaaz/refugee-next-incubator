import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { NotifierService } from 'angular-notifier';
import { PuserService } from '../../services/puser.service'


@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit {
  puser = {
    name: ''
  }

  disableButton: boolean = false;

  private readonly notifier: NotifierService;

  constructor(private puserService: PuserService, private notifierService: NotifierService, private translate: TranslateService) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }


  createPUser(): void {
    const data = {
      name: this.puser.name,
    };

    this.puserService.addPUser(data)
      .subscribe(
        response => {
          this.notifier.notify('success', this.translate.instant('BODY.SignUp.NOTIFIER.SUCCESSMSG'));
          this.disableButton = true;
        },
        error => {
          this.notifier.notify('error', error);
        });
  }


}
