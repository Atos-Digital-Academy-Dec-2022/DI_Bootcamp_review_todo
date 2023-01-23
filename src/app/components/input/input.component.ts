import { Component,Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output() inputEvent = new EventEmitter<string>();
  // @Output() inputEvent2 = new EventEmitter<string>();
  @Input() label!: string

  @Input() name!: string
  input = ''

  sendInput(){
    this.inputEvent.emit(this.input);
    // this.inputEvent2.emit(this.input);
  }
}
