// Import the Injectable decorator to make this class a service
import { Injectable } from '@angular/core';
// Import HttpClient to make HTTP requests
import { HttpClient} from '@angular/common/http'
// Import Observable for handling asynchronous data
import { Observable } from 'rxjs';

// Mark this class as a service and make it available app-wide
@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Inject HttpClient dependency through constructor
  constructor(private httpClient:HttpClient){ }
  
  // Fetch student data from external API and return as Observable
  GetStudentData():Observable<any>{
    return this.httpClient.get('https://api.jsonblob.com/019cadd4-39a3-7297-a08d-17dc18b8e4f4');
  }
  
  // Fetch weather data from OpenWeatherMap API and return as Observable
  GetWeatherData():Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  }
}