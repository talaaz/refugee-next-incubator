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
import { TeamComponent } from './components/team/team.component'
import { AboutComponent } from './components/about/about.component';
import { IncubationJourneyComponent } from './components/incubationJourney/incubationJourney.component';
import { WhyToJoinComponent } from './components/whyToJoin/whyToJoin.component';
import { SignUpComponent } from './components/signUp/signUp.component';
//Service
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services/services.service';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollaborationsComponent,
    TeamComponent,
    AboutComponent,
    IncubationJourneyComponent,
    WhyToJoinComponent,
    SignUpComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,ServicesService]
})
export class AppModule { }
