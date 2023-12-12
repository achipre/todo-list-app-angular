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

interface Todo {
  id: string
  titulo: string
  description: string
  category: string
  date: string
}
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
  title = 'todo-app-angular';
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

  handleVisibleInput = (openInput: boolean) => {
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
      this.todos = []
      localStorage.setItem('todosAngular', JSON.stringify(this.todos))
      return this.todos ;
    } else {
      console.log(this.todos);
      return this.todos = JSON.parse(localStorage.getItem('todosAngular')!)
    }

  }
  handleNewTodo = (todo: Todo) => {
    this.todos.push(todo)
  }
}
