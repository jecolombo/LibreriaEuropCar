import { Component, Input, ViewChild, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'europcar-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent<T> implements OnChanges {
  @Input() data: T[] = [];
  @Input() columns: string[] = [];
  @Input() vedereModifica: boolean = true;
  @Input() vedereElimina: boolean = true;
  @Input() modificaRouterLink: string = '../modifica/{{element.id}}';
  @Input() eliminaMethodName: string = ''; 
  
  @Output() eliminaClick: EventEmitter<any> = new EventEmitter<any>(); 
  
  dataSource!: MatTableDataSource<T>;
  displayedColumns: string[] = [];
  
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource<T>(this.data);
    this.displayedColumns = this.columns;
    if(this.vedereModifica){
      this.displayedColumns.push('modifica');
    }
    if(this.vedereElimina){
      this.displayedColumns.push('elimina');
    }
  }
  
  onElimina(element: any) {
    if (this.eliminaMethodName) {
      this.eliminaClick.emit({ element, methodName: this.eliminaMethodName });
    }
  }
}

