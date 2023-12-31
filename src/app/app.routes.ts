import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { ViewPersonComponent } from './view-person/view-person.component';
import { PersonComponent } from './person/person.component';

export const routes: Routes = [
  {path:'',component:HomeComponent, redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'list', component: PersonComponent },
  { path: 'ViewPerson/:Id', component: ViewPersonComponent },
  { path: 'AddPerson', component: AddPersonComponent },
  { path: 'EditPerson/:Id', component: EditPersonComponent } 
];
