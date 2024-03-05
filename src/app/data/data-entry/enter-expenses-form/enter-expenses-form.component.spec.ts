import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterExpensesFormComponent } from './enter-expenses-form.component';

describe('EnterExpensesFormComponent', () => {
  let component: EnterExpensesFormComponent;
  let fixture: ComponentFixture<EnterExpensesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterExpensesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterExpensesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
