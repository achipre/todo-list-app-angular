import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-angular',
  standalone: true,
  imports: [],
  templateUrl: './logo-angular.component.html',
  styleUrl: './logo-angular.component.css'
})
export class LogoAngularComponent {
  @Input() visibleInputCategory: boolean = false

}
