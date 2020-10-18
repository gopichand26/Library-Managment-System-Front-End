import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '@angular/compiler';

import { AppComponent } from './app.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import {routing} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./service/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./core/interceptor";
import { HomePageComponent } from './user/home-page/home-page.component';
import { DailyRegisterComponent } from './user/daily-register/daily-register.component';
import { SearchComponent } from './user/search/search.component';
import { BnmComponent } from './user/bnm/bnm.component';
import { AddNewspaperComponent } from './add-newspaper/add-newspaper.component';
import { NewspaperListComponent } from './newspaper-list/newspaper-list.component';
import { UpdateNewspaperComponent } from './update-newspaper/update-newspaper.component';
import { MagazineListComponent } from './magazine-list/magazine-list.component';
import { AddMagazineComponent } from './add-magazine/add-magazine.component';
import { UpdateMagazineComponent } from './update-magazine/update-magazine.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    HomePageComponent,
    DailyRegisterComponent,
    SearchComponent,
    BnmComponent,
    AddNewspaperComponent,
    NewspaperListComponent,
    UpdateNewspaperComponent,
    MagazineListComponent,
    AddMagazineComponent,
    UpdateMagazineComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }