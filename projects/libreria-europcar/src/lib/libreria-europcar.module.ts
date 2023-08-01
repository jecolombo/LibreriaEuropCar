import { NgModule } from '@angular/core';
import { LibreriaEuropcarComponent } from './libreria-europcar.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { TabellaComponent } from './tabella/tabella.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    LibreriaEuropcarComponent,
    ButtonComponent,
    TabellaComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule 
  ],
  exports: [
    LibreriaEuropcarComponent,
    ButtonComponent,
    TabellaComponent,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class LibreriaEuropcarModule { }
