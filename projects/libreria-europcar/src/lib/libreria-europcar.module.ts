import { NgModule } from '@angular/core';
import { LibreriaEuropcarComponent } from './libreria-europcar.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LibreriaEuropcarComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LibreriaEuropcarComponent,
    ButtonComponent
  ]
})
export class LibreriaEuropcarModule { }
