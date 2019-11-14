import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

export interface Task {
  id: number;
  name: string;
  priority: number;
}

@Injectable({
  providedIn: 'root'
})


export class TodoListService {
  tasks = [{
    id: 1,
    name: 'Cięcie materiału',
    priority: 1
  },

  {
    id: 2,
    name: 'Muzyka',
    priority: 2
  },
  ];

  addTodoService(e) {       //przekazaniie do listy nowy element
    this.tasks.push(e);
  }

  getTodos() {               //zwracanie todosow
    return this.tasks;
  }

  deleteTodo(task) {
    this.tasks = this.tasks.filter(t => t.name !== task.name);
  }

  constructor() { }
}
