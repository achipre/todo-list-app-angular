import { Component } from '@angular/core';

@Component({
  selector: 'app-section-category',
  standalone: true,
  imports: [],
  templateUrl: './section-category.component.html',
  styleUrl: './section-category.component.css',
  })
export class SectionCategoryComponent {
  categories = [
    {id: '1', nombre: 'Todos'},
    {id: '2', nombre: 'Sin Categoria'},
    {id: '3', nombre: 'Libros'},
    {id: '4', nombre: 'Peliculas'},
    {id: '5', nombre: 'Series'},
    {id: '4', nombre: 'Youtubes'},
    {id: '5', nombre: 'Pages'}
  ]
  isVisibleNewCategory = false

}
