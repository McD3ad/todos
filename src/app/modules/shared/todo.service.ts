import { Injectable } from '@angular/core';
import { todos } from './data.sevice';

export class Todo {
  id: number;

  constructor(
    public title: string,
    public completed: boolean
  ) { }
}

// @Injectable()
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }

}
