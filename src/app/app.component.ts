import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TodoListService, Task } from './todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoListService]
})

export class AppComponent implements OnInit {
  title = 'routing-app';

  public tasks: Array<Task>;

  ngOnInit() {
    this.tasks = this.todoslistservice.tasks;
  }

  constructor(private todoslistservice: TodoListService) {
  }

}
