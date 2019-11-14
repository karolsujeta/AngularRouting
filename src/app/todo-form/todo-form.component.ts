import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  //@Output() onFormSubmit: EventEmitter<any> = new EventEmitter<any>();
  newTodo: string;


  constructor(private _todolistservice:TodoListService) { }


  ngOnInit() {
  }

  addTodo() {
    var newElement = {
      id: 2,
      name: this.newTodo,
      priority: 3
    }

    this._todolistservice.addTodoService(newElement);

    this.newTodo = '';
  }
}
