import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import components
import { StudentListComponent } from './components/student-list/student-list';
import { WeatherComponent } from './components/weather/weather';

@Component({
  selector: 'app-root',
  //add componets to the imports
  imports: [RouterOutlet, StudentListComponent, WeatherComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
