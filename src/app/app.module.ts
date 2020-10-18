import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '@angular/compiler';

import { AppComponent } from './app.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import {routing} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./service/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./core/interceptor";
import { HomePageComponent } from './user/home-page/home-page.component';
import { SearchComponent } from './user/search/search.component';
import { BnmComponent } from './user/bnm/bnm.component';
import { AddNewspaperComponent } from './add-newspaper/add-newspaper.component';
import { NewspaperListComponent } from './newspaper-list/newspaper-list.component';
import { UpdateNewspaperComponent } from './update-newspaper/update-newspaper.component';
import { MagazineListComponent } from './magazine-list/magazine-list.component';
import { AddMagazineComponent } from './add-magazine/add-magazine.component';
import { UpdateMagazineComponent } from './update-magazine/update-magazine.component';
import { AddVisitorComponent } from './register/add-visitor/add-visitor.component';
import { EditVisitorComponent } from './register/edit-visitor/edit-visitor.component';
import { RegisterHomeComponent } from './register/register-home/register-home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksListComponent } from './books-list/books-list.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { RegisterService } from './service/register.service';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    LoginComponent,
    AddUserComponent,
    HomePageComponent,
    SearchComponent,
    BnmComponent,
    AddNewspaperComponent,
    NewspaperListComponent,
    UpdateNewspaperComponent,
    MagazineListComponent,
    AddMagazineComponent,
    UpdateMagazineComponent,
    AddVisitorComponent,
    EditVisitorComponent,
    RegisterHomeComponent,
    AddBookComponent,
    BooksListComponent,
    UpdateBooksComponent,
    SearchBookComponent
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
    multi : true},RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }