import { Component, OnInit } from '@angular/core';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      
      <h2>My Students</h2>
      <ul class="students">
        <li *ngFor="let student of students" (click)="onSelect(student)" [class.selected]="student === selectedStudent">
          <span class="badge">{{student.id}}</span> {{student.name}}
        </li>
      </ul>
      <my-student-detail [student]="selectedStudent"></my-student-detail>
  `,
  styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .students {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .students li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .students li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .students li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .students .text {
        position: relative;
        top: -3px;
      }
      .students .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
  `],
  providers: [StudentService]
  })

export class AppComponent implements OnInit { 
  title = 'Student Behavior Assessment';
  selectedStudent: Student;
  students: Student[];
  
  constructor(private studentService: StudentService) { }
 
  getStudents(): void {
    this.studentService.getStudents().then(students => this.students = students);
  }
 
  ngOnInit(): void {
    this.getStudents();
  }
  
  onSelect(student: Student): void{
      this.selectedStudent = student;
  }
  

}
