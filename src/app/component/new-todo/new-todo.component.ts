import { Component } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css'
})
export class NewTodoComponent {
  year = new Date().getFullYear();
  month = new Date().getMonth() + 1;
  day = new Date().getDate();
  date = `${this.year}/${this.month}/${this.day}`
  hours = new Date().toLocaleTimeString();


}
