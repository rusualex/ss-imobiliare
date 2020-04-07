import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './pages/login/login.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {LayoutModule} from "@angular/cdk/layout";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSliderModule} from "@angular/material/slider";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CommonModule} from "@angular/common";
import {HeaderComponent} from './pages/header/header.component';
import {HomeComponent} from './pages/home/home.component';
import {RegisterComponent} from './pages/register/register.component';
import {DetailComponent} from './pages/detail/detail.component';
import {MatCardModule} from "@angular/material/card";
import { AddImobiliaComponent } from './pages/add-imobilia/add-imobilia.component';
import {HttpClientModule} from "@angular/common/http";
import {httpInterceptorProviders} from "./auth/auth-interceptor";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    DetailComponent,
    AddImobiliaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatButtonModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule
  ],
  exports: [
    FormsModule
  ],
  providers: [FormBuilder, MatSnackBar,  httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
