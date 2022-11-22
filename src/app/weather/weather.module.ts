import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CelsiusToFahrenheitPipe,  } from '../core/pipes/celsiusToFahrenheit.pipe ';

const routes = [
  {
    path: 'weather',
    component: WeatherComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [WeatherComponent, CelsiusToFahrenheitPipe],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [WeatherComponent],
})
export class WeatherModule {}
