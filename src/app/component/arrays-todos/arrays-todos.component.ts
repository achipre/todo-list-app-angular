import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-arrays-todos',
  standalone: true,
  imports: [],
  templateUrl: './arrays-todos.component.html',
  styleUrl: './arrays-todos.component.css'
})
export class ArraysTodosComponent {
  // Open Modal
  @Output() handleOpenModal = new EventEmitter<boolean>()
  sendOpenModal(){
    this.handleOpenModal.emit(true)
  }
  // Array Todos
  @Input() arrayTodos: Todo[] = []
  @Output() idArray = new EventEmitter<string>()

  // Handle Delete
  sendDelete(id: string){
    this.idArray.emit(id)
  }
}
