//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CookieService} from 'ngx-cookie-service';

//Calendar
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

//Swiper
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

//Pipes
import { UniquePipe } from './pipes/unique.pipe';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Slider1Component } from './slider/slider1/slider1.component';
import { Slider2Component } from './slider/slider2/slider2.component';
import { Slider3Component } from './slider/slider3/slider3.component';

//Office Components
import { OfficeComponent } from './office/office.component';
import { LoginComponent } from './office/login/login.component';
import { OffHeaderComponent } from './office/header/header.component';
import { OffFooterComponent } from './office/footer/footer.component';
import { OffHomeComponent } from './office/home/home.component';

import { OffCalendarComponent } from './office/calendar/calendar.component';
import { OffTasksComponent } from './office/tasks/tasks.component';

//Office Services
import { OfficeService } from './office/offservices/office.service';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    UniquePipe,
    HeaderComponent,
    FooterComponent,
    Slider1Component,
    Slider2Component,
    Slider3Component,
    OfficeComponent,
    LoginComponent,
    OffHeaderComponent,
    OffFooterComponent,
    OffHomeComponent,
    OffCalendarComponent,
    OffTasksComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    SwiperModule,
    HttpClientModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })

  ],
  providers: [
  appRoutingProviders,
  {provide : SWIPER_CONFIG,useValue: DEFAULT_SWIPER_CONFIG},
  CookieService,
  OfficeService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
