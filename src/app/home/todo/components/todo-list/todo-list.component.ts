import { Component, input, output } from '@angular/core';
import { TodoMocks } from '../../mocks/todo.mocks';
import { Todo } from '../../models/todo.types';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  content = input.required<Todo[] | null>();
  deleteIndex = output<number>();

  onDelete(idx: number) {
    this.deleteIndex.emit(idx);
  }
}
