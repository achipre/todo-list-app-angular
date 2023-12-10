import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LogoAngularComponent } from './logo-angular/logo-angular.component';
import { FrameworksComponent } from './component/other-tech/frameworks/frameworks.component';
import { InputSearchComponent } from './component/input-search/input-search.component';
import { SectionCategoryComponent } from './component/section-category/section-category.component';
import { LogoAddTodoComponent } from './component/logo-add-todo/logo-add-todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LogoAngularComponent, FrameworksComponent, InputSearchComponent, SectionCategoryComponent, LogoAddTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app-angular';
}
