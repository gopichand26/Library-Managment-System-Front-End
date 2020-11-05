import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import { HomePageComponent } from './user/home-page/home-page.component';
import { SearchComponent } from './searching/search/search.component';
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
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { BooksearchComponent } from './searching/booksearch/booksearch.component';
import { MagazinesearchComponent } from './searching/magazinesearch/magazinesearch.component';
import { NewspapersearchComponent } from './searching/newspapersearch/newspapersearch.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { SearchLibraryComponent } from './search-library/search-library.component';
import { DeleteLibraryComponent } from './delete-library/delete-library.component';
import { UpdateLibraryComponent } from './update-library/update-library.component';
import { LibraryListComponent } from './library-list/library-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'home-page', component: HomePageComponent},
  { path: 'search', component: SearchComponent},
  { path: 'bnm', component: BnmComponent},
  { path: 'newspaper', component: NewspaperListComponent },
  { path: 'add', component: AddNewspaperComponent },
  { path: 'update/:id', component: UpdateNewspaperComponent },
  { path: 'magazine', component: MagazineListComponent },
  { path: 'add-magazine', component: AddMagazineComponent },
  { path: 'update-magazine/:id', component: UpdateMagazineComponent },
  { path: 'edit-user', component: EditUserComponent },
  {path : '', component : LoginComponent},
  {
    path : "add-Library" , component : AddLibraryComponent
  },
  {
    path : "search-Floor" , component : SearchLibraryComponent
  },
  { path: 'delete/:floor_no', component: DeleteLibraryComponent},
  {
    path : "library", component : LibraryListComponent
  },
  
  {
    path: "update-Library/:floor_no", component: UpdateLibraryComponent
  },
  {
    path : "add-Book" , component : AddBookComponent
  },
  {
    path : "search-Book" , component : SearchBookComponent
  },
  // {
  //   path : "search-Book-Author" , component : SearchBookAuthorComponent
  // },
  {
    path : "books", component : BooksListComponent
  },
  {
    path: "update-Books/:title", component: UpdateBooksComponent
  },
  {path:"register",component:RegisterHomeComponent},
  {path:"editvisitor/:id" , component:EditVisitorComponent},
  {path:"addvisitor",component:AddVisitorComponent},
  { path: "searchbook" , component:BooksearchComponent },
  { path: "searchmagazine" , component:MagazinesearchComponent },
  { path: "searchnewspaper" , component:NewspapersearchComponent }

];

export const routing = RouterModule.forRoot(routes);