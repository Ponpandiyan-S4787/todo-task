import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoState } from '../+state/todo.reducer';
import { Todo } from '../../home/todo/models/todo.types';
import { addTodo, deleteTodo } from '../+state/tode.actions';
import { todos$ } from '../+state/todo.selector';

@Injectable({ providedIn: 'root' })
export class TodoFacade {
  state = inject(Store<TodoState>);

  todos$ = this.state.select(todos$);

  addTodo(todo: Todo) {
    this.state.dispatch(addTodo({ todo }));
  }

  deleteTodo(idx: number) {
    this.state.dispatch(deleteTodo({ idx }));
  }
}
