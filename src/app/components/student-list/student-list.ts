// Import Component decorator and OnInit lifecycle hook
import { Component, OnInit } from '@angular/core';
// Import CommonModule for directives like *ngFor and *ngIf
import { CommonModule } from '@angular/common';
// Import the DataService to fetch student data
import { DataService } from '../services/data';

// Define this class as a standalone Angular component
@Component({
  // CSS selector used to embed this component in HTML (e.g., <app-student-list></app-student-list>)
  selector: 'app-student-list',
  // Mark as standalone so it doesn't need an NgModule
  standalone: true,
  // Import modules/directives this component uses
  imports: [CommonModule],
  // Path to the component's HTML template file
  templateUrl: './student-list.component.html',
  // Path to the component's CSS stylesheet
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  // Array to store the list of students
  students: any[] = [];
  // String to store the school name
  schoolName: string = '';

  // Inject the DataService through the constructor
  constructor(private dataService: DataService) { }

  // Angular lifecycle hook that runs when component initializes
  ngOnInit(): void {
    // Subscribe to the Observable returned by GetStudentData()
    this.dataService.GetStudentData().subscribe(
      // Arrow function receives the data from the API
      (data) => {
        // Extract the school name from the response
        this.schoolName = data.School;
        // Extract the student array from the response
        this.students = data.students;
      }
    );
  }
}
