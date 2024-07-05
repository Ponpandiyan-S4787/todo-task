import { createAction, props } from '@ngrx/store';
import { Todo } from '../../home/todo/models/todo.types';

export const addTodo = createAction('[Todo] add todo', props<{ todo: Todo }>());

export const deleteTodo = createAction(
  '[Todo] delete todo',
  props<{ idx: number }>()
);
