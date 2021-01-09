import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPage } from "../pages/login/login";
import { EventsPage } from "../pages/events/events";
import { PersonalDetailsPageModule } from "../pages/personal-details/personal-details.module";
import { ConsultlistPageModule } from "../pages/consultlist/consultlist.module";
import { SummaryPageModule } from "../pages/summary/summary.module";
import { DoctorsPageModule } from "../pages/doctors/doctors.module";
import { DoctorDetailsPageModule } from "../pages/doctor-details/doctor-details.module";
import { ServicesPageModule } from "../pages/services/services.module";
import { LabResultPageModule } from "../pages/labresult/labresult.module";
import { InsurancesPageModule } from "../pages/insurances/insurances.module";
import { LabOrderPageModule } from "../pages/laborder/laborder.module";
import { AboutUsPageModule } from "../pages/about-us/about-us.module";
import { LocationsPageModule } from "../pages/location/locations.module";
import { FeedbackPageModule } from "../pages/feedback/feedback.module";
import { QualityPageModule } from "../pages/quality/quality.module";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpApiProvider } from '../providers/http-api/http-api';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,EventsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SummaryPageModule,
    ConsultlistPageModule,
    PersonalDetailsPageModule,
    DoctorsPageModule,
    DoctorDetailsPageModule,
    ServicesPageModule,
    InsurancesPageModule,
    HomePageModule,
    LabOrderPageModule,
    LabResultPageModule,
    AboutUsPageModule,
    LocationsPageModule,
    FeedbackPageModule,
    QualityPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,EventsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpApiProvider,
    
  ]
})
export class AppModule {}
