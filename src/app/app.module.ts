import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibreriaEuropcarModule } from "../../projects/libreria-europcar/src/lib/libreria-europcar.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [
        AppComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        LibreriaEuropcarModule,
        BrowserAnimationsModule,
        MatTableModule
    ]
})
export class AppModule { }
