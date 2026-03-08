import { Component, OnInit } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { DataService } from '../services/data';

   @Component({
     selector: 'app-student-list',
     standalone: true,
     imports: [CommonModule],
     templateUrl: './student-list.component.html',
     styleUrl: './student-list.component.css'
   })
   export class StudentListComponent implements OnInit {
     // Store the student data
     students: any[] = [];
     schoolName: string = '';

     constructor(private dataService: DataService) { }

     ngOnInit(): void {
       // Subscribe to the Observable from the service
       this.dataService.GetStudentData().subscribe(
         (data) => {
           this.schoolName = data.School;
           this.students = data.students;
         }
       );
     }
   }