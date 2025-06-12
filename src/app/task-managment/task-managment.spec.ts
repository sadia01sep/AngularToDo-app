import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagment } from './task-managment';

describe('TaskManagment', () => {
  let component: TaskManagment;
  let fixture: ComponentFixture<TaskManagment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManagment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskManagment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
