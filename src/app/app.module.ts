import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Head1Component } from './head1/head1.component';
import { MenubarComponent } from './menubar/menubar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { PlanComponent } from './pages/plan/plan.component';

import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeBoxComponent } from './pages/home/home-box/home-box.component';
import { FiltertypesPipe } from './pipes/filtertypes.pipe';
import { DetailsComponent } from './pages/home/details/details.component';
import { ContentBoxComponent } from './pages/contact-us/content-box/content-box.component';
import { PlanBoxComponent } from './pages/plan/plan-box/plan-box.component';


@NgModule({
  declarations: [
    AppComponent,
    Head1Component,
    MenubarComponent,
    DetailsComponent,
    
    PlanComponent,
    ContactUsComponent,
    HomeComponent,
    HomeBoxComponent,
    FiltertypesPipe,
    ContentBoxComponent,
    PlanBoxComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
