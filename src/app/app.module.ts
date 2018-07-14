import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';


// Paste in your credentials that you saved earlier
var firebaseConfig = {
    apiKey: "AIzaSyDwDvhedhwGGtfRdDYcXhn_Q8dp0padIqg",
    authDomain: "angular-1012c.firebaseapp.com",
    databaseURL: "https://angular-1012c.firebaseio.com",
    projectId: "angular-1012c",
    storageBucket: "angular-1012c.appspot.com",
    messagingSenderId: "631334144567"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
