import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterEnum } from '../types/filter.enum';
import { TodoInterface } from '../types/todo.interface';

@Injectable()
export class TodoService {

  // NOTE: BehaviorSubject: streaming interface

  todos$ = new BehaviorSubject<TodoInterface[]>([]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      id: Math.random().toString(16),
      text,
      isCompleted: false,
    }

    const updatedTodos = [...this.todos$.getValue(), newTodo]

    // NOTE: (BehaviorSubject instance).next(newValue): update stream
    this.todos$.next(updatedTodos);
  }
}
