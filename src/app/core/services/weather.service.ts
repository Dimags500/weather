import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherRequestInterface } from '../models/weatherRequest.interface';
import { WeatherResponseInterface } from '../models/weatherResponse.interface';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl = environment.weatherApiUrl;
  private API_KEY  = environment.weatherApiKey;

  constructor(private http: HttpClient){ }

  getWeather ( data : WeatherRequestInterface ) : Observable<WeatherResponseInterface>
  {
    let url = this.baseUrl + `?lat=${data.latitude}&lon=${data.longitude}&exclude=${data.part}&units=metric&appid=${this.API_KEY}`
    return this.http.get<WeatherResponseInterface>(url)
  }
}
