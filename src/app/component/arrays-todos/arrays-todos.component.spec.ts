import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysTodosComponent } from './arrays-todos.component';

describe('ArraysTodosComponent', () => {
  let component: ArraysTodosComponent;
  let fixture: ComponentFixture<ArraysTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArraysTodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArraysTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
