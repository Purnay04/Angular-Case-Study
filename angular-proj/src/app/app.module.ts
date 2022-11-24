import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FirstCustComponent } from './first-cust/first-cust.component';
import { SecondCustComponent } from './second-cust/second-cust.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FsChild1Component } from './fs-child1/fs-child1.component';
import { ScChild1Component } from './sc-child1/sc-child1.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FirstCustComponent,
    SecondCustComponent,
    PageNotFoundComponent,
    FsChild1Component,
    ScChild1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
