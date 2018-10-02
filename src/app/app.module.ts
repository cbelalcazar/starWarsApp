import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';
import { NavesComponent } from './naves/naves.component';


  const appRoutes: Routes = [  
      { path: 'naves',      component: NavesComponent },
  ];



@NgModule({
  declarations: [
    AppComponent,
    NavesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
