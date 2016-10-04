import { Component, Input } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'my-student-detail',
  template: `
    <div *ngIf="student">
      <h2>{{student.name}} details</h2>
      <div><label>id: </label>{{student.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="student.name" placeholder="name"/>
      </div>
    </div>
    `
})
export class StudentDetailComponent {
  @Input()
  student: Student;
}
