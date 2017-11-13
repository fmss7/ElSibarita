import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Nav } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage, HomePage, DescubrePage, CreaPage, LogInPage, SignInPage } from '../pages/pages';

import { DatabaseService } from '../services/databaseService';
import { UserService } from '../services/userService';

@NgModule({
	declarations: [
		MyApp,
		TabsPage,
		HomePage,
		DescubrePage,
		CreaPage,
		LogInPage,
		SignInPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		TabsPage,
		HomePage,
		DescubrePage,
		CreaPage,
		LogInPage,
		SignInPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		DatabaseService,
		UserService,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
