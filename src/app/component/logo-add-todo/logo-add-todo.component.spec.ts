import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoAddTodoComponent } from './logo-add-todo.component';

describe('LogoAddTodoComponent', () => {
  let component: LogoAddTodoComponent;
  let fixture: ComponentFixture<LogoAddTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoAddTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoAddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
