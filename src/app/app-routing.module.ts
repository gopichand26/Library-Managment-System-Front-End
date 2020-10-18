import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import { HomePageComponent } from './user/home-page/home-page.component';
import { DailyRegisterComponent } from './user/daily-register/daily-register.component';
import { SearchComponent } from './user/search/search.component';
import { BnmComponent } from './user/bnm/bnm.component';
import { NewspaperListComponent } from './newspaper-list/newspaper-list.component';
import { AddNewspaperComponent } from './add-newspaper/add-newspaper.component';
import { UpdateNewspaperComponent } from './update-newspaper/update-newspaper.component';
import { MagazineListComponent } from './magazine-list/magazine-list.component';
import { AddMagazineComponent } from './add-magazine/add-magazine.component';
import { UpdateMagazineComponent } from './update-magazine/update-magazine.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'home-page', component: HomePageComponent},
  { path: 'daily-register', component: DailyRegisterComponent},
  { path: 'search', component: SearchComponent},
  { path: 'bnm', component: BnmComponent},
  { path: 'newspaper', component: NewspaperListComponent },
  { path: 'add', component: AddNewspaperComponent },
  { path: 'update/:name', component: UpdateNewspaperComponent },
  { path: 'magazine', component: MagazineListComponent },
  { path: 'add-magazine', component: AddMagazineComponent },
  { path: 'update-magazine/:name', component: UpdateMagazineComponent },
  {path : '', component : LoginComponent}

];

export const routing = RouterModule.forRoot(routes);