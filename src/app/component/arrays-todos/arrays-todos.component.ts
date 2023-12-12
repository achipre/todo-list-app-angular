import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-arrays-todos',
  standalone: true,
  imports: [],
  templateUrl: './arrays-todos.component.html',
  styleUrl: './arrays-todos.component.css'
})
export class ArraysTodosComponent {
  // Array Todos
  @Input() arrayTodos!: {id: string, titulo: string, description: string, category: string,date: string }[]
  // Open Modal
  @Output() handleOpenModal = new EventEmitter<boolean>()
  sendOpenModal(){
    this.handleOpenModal.emit(true)
  }
  // Handle Delete
  handleDelete(id: string){
    this.arrayTodos = this.arrayTodos.filter(todo => todo.id !== id)
  }
}
