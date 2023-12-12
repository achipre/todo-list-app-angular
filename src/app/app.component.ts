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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LogoAngularComponent, FrameworksComponent, InputSearchComponent, SectionCategoryComponent, LogoAddTodoComponent, NewTodoComponent, LogoNotFoundComponent, ArraysTodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
}
