import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-incubationJourney',
  templateUrl: './incubationJourney.component.html',
  styleUrls: [ './incubationJourney.component.css' ]
})
export class IncubationJourneyComponent implements OnInit {
  gfg: any[];

    ngOnInit(): void {
      this.gfg = [
        {
          status: "Time 1",
        },
        {
          status: "Time 2",
        },
        {
          status: "Time 3",
        },
        {
          status: "Time 4",
        },
      ];
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/