import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


  constructor(private _todolistservice:TodoListService) { }     //wstrzykowanie serwisu //nauka-wstrzykiowanie zależności

  ngOnInit() {
  }

  getTasks(){
    return this._todolistservice.getTodos();            //wywoluje zeby dostac taski z serwisu w widoku              
  }

  deleteTask(task){
    this._todolistservice.deleteTodo(task);
  }

  title = "Lista zadań";

}
