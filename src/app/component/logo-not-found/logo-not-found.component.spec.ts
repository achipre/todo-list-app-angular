import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoNotFoundComponent } from './logo-not-found.component';

describe('LogoNotFoundComponent', () => {
  let component: LogoNotFoundComponent;
  let fixture: ComponentFixture<LogoNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoNotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
