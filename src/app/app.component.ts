import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LogoAngularComponent } from './logo-angular/logo-angular.component';
import { FrameworksComponent } from './component/other-tech/frameworks/frameworks.component';
import { InputSearchComponent } from './component/input-search/input-search.component';
import { SectionCategoryComponent } from './component/section-category/section-category.component';
import { LogoAddTodoComponent } from './component/logo-add-todo/logo-add-todo.component';
import { NewTodoComponent } from './component/new-todo/new-todo.component';
import { LogoNotFoundComponent } from './component/logo-not-found/logo-not-found.component';
import { ArraysTodosComponent } from './component/arrays-todos/arrays-todos.component';
import { Todo } from './interfaces/todo.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LogoAngularComponent, FrameworksComponent, InputSearchComponent, SectionCategoryComponent, LogoAddTodoComponent, NewTodoComponent, LogoNotFoundComponent, ArraysTodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){
    // cargar todos del localStorage
    this.cargarTodos()
  }

  // Visibilidad del Modal
  isVisibleModal = false

  openModal(infoModal: boolean){
    this.isVisibleModal = infoModal
  }
  closeModal(infoModal: boolean){
    this.isVisibleModal = infoModal
  }
  // Visibilidad del Input de las Categorias
  isVisibleCategory = false

  handleVisibleInput (openInput: boolean) {
    if(this.isVisibleCategory) {
      setTimeout(() => {
        this.isVisibleCategory = openInput
      }, 250);
    } else {
      this.isVisibleCategory = openInput
    }
  }
  // Array de Todos
  todos: Todo[] = []
  // Obtener informacion de un nuevo Todo
  cargarTodos (){
    if(localStorage.getItem('todosAngular') === null){
      const newTodo: Todo[] = []
      localStorage.setItem('todosAngular', JSON.stringify(newTodo))
      this.todos = newTodo
    } else {
      const newTodo = JSON.parse(localStorage.getItem('todosAngular')!)
      this.todos = newTodo
    }
  }
  deleteTodo(id: string) {
    const newTodos: Todo[] = this.todos.filter(todo => id !== todo.id)
    localStorage.setItem('todosAngular', JSON.stringify(newTodos))

    this.todos = newTodos
  }
  // Value Search
  todosBySearch: Todo[] = []
  valueSearch:string = ''
  infoSearch(value: string){
    this.valueSearch = value.toLowerCase()
    const newArr: Todo[] = this.todos.filter(todo => todo.titulo.toLowerCase().includes(this.valueSearch))
    if (value.length > 0) {
      this.todosBySearch = newArr
    } else {
      this.todosBySearch = this.todos
    }
  }
}
