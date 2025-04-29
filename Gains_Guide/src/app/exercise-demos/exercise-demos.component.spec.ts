import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDemosComponent } from './exercise-demos.component';

describe('ExerciseDemosComponent', () => {
  let component: ExerciseDemosComponent;
  let fixture: ComponentFixture<ExerciseDemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseDemosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
