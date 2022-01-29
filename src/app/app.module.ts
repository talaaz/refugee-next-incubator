import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  
//App 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Screens
import { HomeComponent } from './screens/home/home.component';
import { CollaborationsComponent } from './screens/collaborations/collaborations.component';
//Components
 import { AboutComponent } from './components/about/about.component';
import { IncubationJourneyComponent } from './components/incubationJourney/incubationJourney.component';
import { TeamComponent } from './components/team/team.component'
import { WhyToJoinComponent } from './components/whyToJoin/whyToJoin.component';
import { SignUpComponent } from './components/signUp/signUp.component';
//Service
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

 
@NgModule({
  declarations: [
    AppComponent,
 
    HomeComponent,
    CollaborationsComponent,
     AboutComponent,
    IncubationJourneyComponent,
    TeamComponent,
    WhyToJoinComponent,
    SignUpComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent,ServicesService]
})
export class AppModule { }
