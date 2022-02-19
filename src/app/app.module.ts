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
import { WhyToJoinComponent } from './components/whyToJoin/whyToJoin.component';
import { SignUpComponent } from './components/signUp/signUp.component';
import { CourseComponent } from './components/course/course.component';
import { AboutComponent2 } from './components/about2/about2.component'; 
import { TeamComponent2 } from './components/team2/team2.component';
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
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
//Translatte 
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent2,
    HomeComponent,
    CollaborationsComponent,
    WhyToJoinComponent,
    SignUpComponent,
    CourseComponent,
    TeamComponent2
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
    MatButtonToggleModule,
    MatTabsModule,
    MatInputModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent,ServicesService]
})
export class AppModule { }
