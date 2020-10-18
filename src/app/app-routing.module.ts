import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import { HomePageComponent } from './user/home-page/home-page.component';
import { SearchComponent } from './user/search/search.component';
import { BnmComponent } from './user/bnm/bnm.component';
import { NewspaperListComponent } from './newspaper-list/newspaper-list.component';
import { AddNewspaperComponent } from './add-newspaper/add-newspaper.component';
import { UpdateNewspaperComponent } from './update-newspaper/update-newspaper.component';
import { MagazineListComponent } from './magazine-list/magazine-list.component';
import { AddMagazineComponent } from './add-magazine/add-magazine.component';
import { UpdateMagazineComponent } from './update-magazine/update-magazine.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { BooksListComponent } from './books-list/books-list.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { RegisterHomeComponent } from './register/register-home/register-home.component';
import { EditVisitorComponent } from './register/edit-visitor/edit-visitor.component';
import { AddVisitorComponent } from './register/add-visitor/add-visitor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'home-page', component: HomePageComponent},
  { path: 'search', component: SearchComponent},
  { path: 'bnm', component: BnmComponent},
  { path: 'newspaper', component: NewspaperListComponent },
  { path: 'add', component: AddNewspaperComponent },
  { path: 'update/:name', component: UpdateNewspaperComponent },
  { path: 'magazine', component: MagazineListComponent },
  { path: 'add-magazine', component: AddMagazineComponent },
  { path: 'update-magazine/:name', component: UpdateMagazineComponent },
  {path : '', component : LoginComponent},
  {
    path : "add-Book" , component : AddBookComponent
  },
  {
    path : "search-Book" , component : SearchBookComponent
  },
  {
    path : "books", component : BooksListComponent
  },
  {
    path: "update-Books/:title", component: UpdateBooksComponent
  },
  {path:"register",component:RegisterHomeComponent},
  {path:"editvisitor/:id" , component:EditVisitorComponent},
  {path:"addvisitor",component:AddVisitorComponent}

];

export const routing = RouterModule.forRoot(routes);