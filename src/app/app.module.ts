import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibreriaEuropcarModule } from "../../projects/libreria-europcar/src/lib/libreria-europcar.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        LibreriaEuropcarModule
    ]
})
export class AppModule { }
