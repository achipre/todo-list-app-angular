import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css'
})
export class InputSearchComponent {
  //accede a un elemento con el constructor
  @ViewChild('inputSearch', { static: false}) inputSearch!: ElementRef;
  focusSearch(){
    this.inputSearch.nativeElement.focus();

  }

}
