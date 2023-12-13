import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css'
})
export class InputSearchComponent {

  // Accede a un elemento con el constructor
  @ViewChild('inputSearch') inputSearch!: ElementRef;
  focusSearch(){
    this.inputSearch.nativeElement.focus();
  }
  // Value Input
  @Output() sendValueSearch = new EventEmitter<string>()

  handleValueSearch(event: Event){
    const infoInputSearch = (event.target as HTMLInputElement).value
    this.sendValueSearch.emit(infoInputSearch)
  }
  // @Output() valueInputChange = new EventEmitter<string>();
  // onValueInputChange(value: string) {
  //   this.valueInputChange.emit(value);
  // }

  // handleInputSearch(event: Event) {
  //   const valueInputSearch = (event.target as HTMLInputElement).value
  //   console.log(valueInputSearch)
  //   console.log(this.valueInput);

  // }

}
