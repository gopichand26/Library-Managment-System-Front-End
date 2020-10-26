import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { SearchComponent } from './searching/search/search.component';
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
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchNewspaperComponent } from './search-newspaper/search-newspaper.component';
import { SearchMagazineComponent } from './search-magazine/search-magazine.component';
import { ErrorHandlerService } from './service/error-handler.service';
import { BooksearchComponent } from './searching/booksearch/booksearch.component';
import { MagazinesearchComponent } from './searching/magazinesearch/magazinesearch.component';
import { NewspapersearchComponent } from './searching/newspapersearch/newspapersearch.component';
import { LibraryListComponent } from './library-list/library-list.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { SearchLibraryComponent } from './search-library/search-library.component';
import { DeleteLibraryComponent } from './delete-library/delete-library.component';
import { UpdateLibraryComponent } from './update-library/update-library.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    LoginComponent,
    AddUserComponent,
    HomePageComponent,
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
    SearchBookComponent,
    EditUserComponent,
    NavbarComponent,
    SearchNewspaperComponent,
    SearchMagazineComponent,
    BooksearchComponent,
    MagazinesearchComponent,
    NewspapersearchComponent,
    SearchComponent,
    LibraryListComponent,
    AddLibraryComponent,
    SearchLibraryComponent,
    DeleteLibraryComponent,
    UpdateLibraryComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService, 
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi : true
    },
    RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }