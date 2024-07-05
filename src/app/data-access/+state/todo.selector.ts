import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

const todoFeatureSelector = createFeatureSelector<TodoState>('todo');

export const todos$ = createSelector(
  todoFeatureSelector,
  (state) => state.todos
);
