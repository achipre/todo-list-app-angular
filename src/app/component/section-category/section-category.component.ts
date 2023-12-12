import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-section-category',
  standalone: true,
  imports: [],
  templateUrl: './section-category.component.html',
  styleUrl: './section-category.component.css',
  })
export class SectionCategoryComponent {

  @ViewChild('inputCategory', { static: false}) inputCategory!: ElementRef
  categories = [
    {id: '1', nombre: 'Todos', isSelect: true},
    {id: '2', nombre: 'Sin Categoria', isSelect: false},
    {id: '', nombre: 'Peliculas mas destacadas', isSelect: false}
  ]

  // Visibilidad  del Input
  @Input() visibleInputCategory = false
  @Output() isVisibleInputCategory = new EventEmitter<boolean>()
  handleClickVisibleInput = () => {
    if(this.visibleInputCategory) {
      const elementoInputCategory = document.querySelector('.section-new-categories')
      elementoInputCategory?.classList.add('hidden-new-categories')
      this.isVisibleInputCategory.emit(false)
    } else {
      this.isVisibleInputCategory.emit(true)
      setTimeout(() => {
        this.inputCategory?.nativeElement?.focus()
      }, 5);
    }
  }
  // Eliminar una categoria
  handleDeleteCategory = (id: string) => {
    const filterCategory = this.categories.find(category => category.id === id)
    if(filterCategory?.isSelect){
      const firstCategory = this.categories.map(category => category.nombre === 'Todos' ? {...category, isSelect: true}: {...category, isSelect:false})
      const newCategories = firstCategory.filter(category => category.id !== id)
      this.categories = newCategories
    } else {
      const newCategories = this.categories.filter(category => category.id !== id)
      this.categories = newCategories
    }

  }
  // Agregar una categoria
  handleAddCategorie () {
    const newArrCategories = [...this.categories.map(category => category && {...category , isSelect: false})]
    const newCategory = {id: Math.random().toString(), nombre: this.inputCategory.nativeElement.value, isSelect: true}
    newArrCategories.push(newCategory)
    this.categories = newArrCategories
    this.inputCategory.nativeElement.value = ''
    this.handleClickVisibleInput()
  }
  // Seleccionar una categoria
  handleSelectCategory(id: string){
    const newCategories = this.categories.map(category => category.id === id ? {...category, isSelect: true}: {...category, isSelect: false})
    this.categories = newCategories



  }

}
