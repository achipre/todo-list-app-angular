import { Component } from '@angular/core';

@Component({
  selector: 'app-arrays-todos',
  standalone: true,
  imports: [],
  templateUrl: './arrays-todos.component.html',
  styleUrl: './arrays-todos.component.css'
})
export class ArraysTodosComponent {
  todos = [
    {
      id: '1',
      titulo: 'Pelicula',
      description: 'Esta es la mejor Pelicula de todos los tiempos',
      category: 'Todos',
      date: '20/12/2024'
    },
    {
      id: '2',
      titulo: 'Serie',
      description: 'Esta es la mejor Pelicula de todos los tiempos',
      category: 'Todos',
      date: '20/12/2024'
    },
  ]

}
