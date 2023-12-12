import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-logo-add-todo',
  standalone: true,
  imports: [],
  templateUrl: './logo-add-todo.component.html',
  styleUrl: './logo-add-todo.component.css'
})
export class LogoAddTodoComponent {

  @Input() visibleInputCategory: boolean = false

  @Output() sendOpenModal = new EventEmitter<boolean>()

  handleOpenModal() {
    this.sendOpenModal.emit(true)
  }

}
