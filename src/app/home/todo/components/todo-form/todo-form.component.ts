import { Component, inject, output } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { Todo } from '../../models/todo.types';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss',
})
export class TodoFormComponent {
  fb = inject(UntypedFormBuilder);
  newTodo = output<Todo>();

  todoForm = this.fb.group({
    name: new UntypedFormControl(null, [Validators.required]),
    description: new UntypedFormControl(null, [Validators.required]),
  });

  onSubmit() {
    if (this.todoForm.valid) {
      this.newTodo.emit(this.todoForm.value);
      this.todoForm.reset();
    }
  }
}
