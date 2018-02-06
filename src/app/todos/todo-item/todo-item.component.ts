import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../modules/shared/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: Todo;

  constructor() { }

  ngOnInit() {
  }

}
