import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';

import { environment } from 'src/environments/environment';
import { TaskComponent } from './components/task/task.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { AddSubmissionComponent } from './components/add-submission/add-submission.component';
import { NewSubmissionFormComponent } from './components/new-submission-form/new-submission-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardListComponent,
    CardComponent,
    TaskComponent,
    SubmissionComponent,
    AddSubmissionComponent,
    NewSubmissionFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
