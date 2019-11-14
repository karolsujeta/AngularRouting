import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FilmListComponent } from './film-list/film-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosComponent } from './todos/todos.component';
import { TodoListService } from './todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    FilmListComponent,
    TodoFormComponent,
    TodosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoListService],                       //serwisy dodajemy w providersach
  bootstrap: [AppComponent],
  
})
export class AppModule { }
