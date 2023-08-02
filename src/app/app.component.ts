import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libreriaEuropcar';
  tableData:any[] = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Bob Johnson', age: 40 },
    { id: 4, name: 'Bob Johnson', age: 40 },
    { id: 5, name: 'Bob Johnson', age: 40 },
    { id: 6, name: 'Bob Johnson', age: 40 },
  ];

  tableColumns: string[] = ['id', 'name', 'age'];
  eliminarElemento(element: any) {
    console.log('Eliminando elemento:', element);
  }
}
