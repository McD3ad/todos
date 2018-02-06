import { Injectable } from '@angular/core';
import { todos } from './data.sevice';

export class Todo {
  id: number;

  constructor(
    private title: string,
    private completed: boolean
  ) { }
}

@Injectable()
export class TodoService {
  constructor(private todos: Todo[]) { }

  getTodos() {
    return todos;
  }

}
