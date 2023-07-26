import { Component, Input } from '@angular/core';

@Component({
  selector: 'europcar-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: string='default';
  @Input() label!: string;

  ngOnInit() {
    if (!this.label) {
      this.label = this.type.toUpperCase();
    }
  }

}
