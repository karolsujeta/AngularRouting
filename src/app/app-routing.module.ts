import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { FilmListComponent } from './film-list/film-list.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [
  { path: '', component: FilmListComponent },
  { path: 'mainpage', component: TaskListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }


export const routableComponents = [
  FilmListComponent, TaskListComponent 
];