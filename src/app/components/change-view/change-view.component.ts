import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-change-view',
  templateUrl: './change-view.component.html',
  styleUrl: './change-view.component.css'
})
export class ChangeViewComponent {
  @Input()
  direction: boolean = false // false | del primero al ultimo - true | del ultimo al primero
  
  @Output()
  directionChanged: EventEmitter<boolean> = new EventEmitter()

  setNewView() {
    this.direction ? this.direction = false : this.direction = true
    this.directionChanged.emit(this.direction)
  }
}
