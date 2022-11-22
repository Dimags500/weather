import { Component, OnInit } from '@angular/core';
import { WeatherResponseInterface } from 'src/app/core/models/weatherResponse.interface';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather! : WeatherResponseInterface;
  isLoading = false;
  constructor(private weatherService : WeatherService) { }

  ngOnInit(): void {

    let part = 'hourly';
    let latitude = 32.109333;
    let longitude = 34.855499;

    this.isLoading = true;
    this.weatherService.getWeather({part, latitude ,longitude}).subscribe(data => {
      this.weather = data; 
      this.isLoading = false;

    })
    
  }

}
