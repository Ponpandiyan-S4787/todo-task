import { createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo } from './tode.actions';
import { Todo } from '../../home/todo/models/todo.types';

export type TodoState = {
  todos: Todo[];
};

const todoInitialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  todoInitialState,
  on(addTodo, (state, action) => {
    return {
      ...state,
      todos: [...state.todos, action.todo],
    };
  }),

  on(deleteTodo, (state, action) => {
    return {
      ...state,
      todos: state.todos.filter((todo, idx) => idx !== action.idx),
    };
  })
);
