import { Component, OnInit } from '@angular/core';
   import { CommonModule } from '@angular/common';
   import { DataService } from '../services/data.service';

   @Component({
     selector: 'app-weather',
     standalone: true,
     imports: [CommonModule],
     templateUrl: './weather.component.html',
     styleUrl: './weather.component.css'
   })
   export class WeatherComponent implements OnInit {
     weatherDescription: string = '';

     constructor(private dataService: DataService) { }

     ngOnInit(): void {
       this.dataService.GetWeatherData().subscribe(
         (data) => {
           // Get the weather description from the API response
           this.weatherDescription = data.weather[0].main + ', ' + data.weather[0].description;
         }
       );
     }
   }