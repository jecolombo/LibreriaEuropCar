import { NgModule } from '@angular/core';
import { LibreriaEuropcarComponent } from './libreria-europcar.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';
import { TabellaComponent } from './tabella/tabella.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

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
    MatIconModule ,
    MatTooltipModule,
    RouterModule
  ],
  exports: [
    LibreriaEuropcarComponent,
    ButtonComponent,
    TabellaComponent,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule
  ]
})
export class LibreriaEuropcarModule { }
