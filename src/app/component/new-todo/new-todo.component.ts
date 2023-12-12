import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css'
})
export class NewTodoComponent {
  // refferenciar un Componente principal
  @ViewChild('sectionNew', {static: false}) sectionNew!: ElementRef

  // Add Date in New Todo
  year = new Date().getFullYear();
  month = new Date().getMonth() + 1;
  day = new Date().getDate();
  date = `${this.year}/${this.month}/${this.day}`
  hours = new Date().toLocaleTimeString();

  // Modal
  @Input() modal = false
  @Output() sendCloseModal = new EventEmitter<boolean>()
  handleCloseModal() {
    this.sectionNew.nativeElement.classList.add('new-todo-close')
    setTimeout(() => {
      this.sendCloseModal.emit(false)
    }, 250);
  }
  saveTodo() {
    this.handleCloseModal()
  }



}
