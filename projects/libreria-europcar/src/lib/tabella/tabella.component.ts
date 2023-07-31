import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TabellaColonne } from './tabella-colonne';

@Component({
selector: 'europcar-tabella',
templateUrl: './tabella.component.html',
styleUrls: ['./tabella.component.css']
})
export class TabellaComponent {
@Input() data: any[] = [];
@Input() colonne: TabellaColonne[] = [];
@ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

dataSource: MatTableDataSource<any>;
displayedColumns: string[] = this.colonne.map(colonne => colonne.field); // Aquí se define la propiedad para mostrar las columnas

constructor() {
this.dataSource = new MatTableDataSource<any>(this.data);
}

ngAfterViewInit() {
this.dataSource.paginator = this.paginator;
this.paginator.pageSize = 25; // Se establece el tamaño de página por defecto en 25
}
}
