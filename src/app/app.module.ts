import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import {
    MatIconModule, MatListModule, MatToolbarModule, MatCardModule,
    MatInputModule, MatRadioModule,
    MatButtonModule, MatOptionModule, MatSelectModule
} from '@angular/material';

import {
    CovalentStepsModule, CovalentMessageModule,
    CovalentMediaModule, CovalentLoadingModule, CovalentLayoutModule
} from '@covalent/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';

import { routedComponents, AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        FooterComponent,
        routedComponents,
        RegisterComponent,
        SliderComponent
    ],
    imports: [
        BrowserModule,
        CovalentLayoutModule,
        CovalentStepsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule,
        RouterModule,
        MatCardModule,
        CovalentMessageModule,
        FormsModule,
        ReactiveFormsModule,
        CovalentMediaModule,
        MatInputModule,
        AppRoutingModule,
        CovalentLoadingModule,
        HttpModule,
        MatButtonModule,
        MatOptionModule,
        MatSelectModule,
        MatRadioModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
