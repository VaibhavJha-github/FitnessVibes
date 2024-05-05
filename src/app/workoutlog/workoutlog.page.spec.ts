import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutlogPage } from './workoutlog.page';

describe('WorkoutlogPage', () => {
  let component: WorkoutlogPage;
  let fixture: ComponentFixture<WorkoutlogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WorkoutlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
