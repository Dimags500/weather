import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './core/services/auth.service';
import { WeatherService } from './core/services/weather.service';
import { PersistanceService } from './core/services/persistent.service';
import { WeatherModule } from './weather/weather.module';
import { GlobalHttpErrorsInterceptor } from './core/interceptors/globalHttpErrors.interceptor';

@NgModule({
  declarations: [AppComponent],
  providers: [
    AuthService,
    WeatherService,
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpErrorsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    WeatherModule,
    HttpClientModule,
  ],
  exports: [],
})
export class AppModule {}
