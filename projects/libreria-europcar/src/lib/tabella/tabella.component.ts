import { Component, Input, ViewChild, OnChanges, SimpleChanges, ContentChildren } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TabellaColonne } from './tabella-colonne';

@Component({
  selector: 'europcar-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent<T> implements OnChanges {
  @Input() data: T[] = [];
  @Input() columns: string[] = [];

  dataSource!: MatTableDataSource<T>;
  displayedColumns: string[] = [];
  
  @ContentChildren(button)
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<T>(this.data);
    this.displayedColumns = this.columns;
  }
}
