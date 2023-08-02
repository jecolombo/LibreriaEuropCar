import { Component, Input } from '@angular/core';

@Component({
  selector: 'europcar-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: string='default';
  @Input() label!: string;
  @Input() icon:string = '';
  @Input() color:string='';
  
  ngOnInit() {
    if (!this.label) {
      this.label = this.toTitleCase(this.type);
    }
    if(this.type === 'modifica'){
      this.icon = 'edit';
      this.color = 'primary';
    }else if(this.type === 'elimina'){
      this.icon = 'delete'
      this.color = 'warn'
    }
  }
  toTitleCase(input: string): string {
    return input.replace(/\b\w+/g, (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  }
  
}
