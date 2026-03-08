// Import Component decorator and OnInit lifecycle hook
import { Component, OnInit } from '@angular/core';
// Import CommonModule for directives like *ngFor and *ngIf
import { CommonModule } from '@angular/common';
// Import the DataService to fetch weather data
import { DataService } from '../services/data.service';

// Define this class as a standalone Angular component
@Component({
  // CSS selector used to embed this component in HTML (e.g., <app-weather></app-weather>)
  selector: 'app-weather',
  // Mark as standalone so it doesn't need an NgModule
  standalone: true,
  // Import modules/directives this component uses
  imports: [CommonModule],
  // Path to the component's HTML template file
  templateUrl: './weather.component.html',
  // Path to the component's CSS stylesheet
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  // String to store the weather description
  weatherDescription: string = '';

  // Inject the DataService through the constructor
  constructor(private dataService: DataService) { }

  // Angular lifecycle hook that runs when component initializes
  ngOnInit(): void {
    // Subscribe to the Observable returned by GetWeatherData()
    this.dataService.GetWeatherData().subscribe(
      // Arrow function receives the weather data from the API
      (data) => {
        // Extract main weather type and description from the API response
        // Combine them with a comma separator (e.g., "Clouds, overcast clouds")
        this.weatherDescription = data.weather[0].main + ', ' + data.weather[0].description;
      }
    );
  }
}
