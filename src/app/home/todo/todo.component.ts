import { Component, inject } from '@angular/core';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { Todo } from './models/todo.types';
import { TodoFacade } from '../../data-access/facade/todo.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoListComponent, TodoFormComponent, AsyncPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoFacade = inject(TodoFacade);

  todos$ = this.todoFacade.todos$;

  onFromSubmit(todo: Todo) {
    this.todoFacade.addTodo(todo);
  }

  onTodoDelete(idx: number) {
    this.todoFacade.deleteTodo(idx);
  }
}
