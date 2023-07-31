import { NgModule } from '@angular/core';
import { LibreriaEuropcarComponent } from './libreria-europcar.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { TabellaComponent } from './tabella/tabella.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    LibreriaEuropcarComponent,
    ButtonComponent,
    TabellaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    LibreriaEuropcarComponent,
    ButtonComponent,
    TabellaComponent
  ]
})
export class LibreriaEuropcarModule { }
