import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputSearchService {

  private inputVelueSearch!: string
  private _stringSearch: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
   }
}
