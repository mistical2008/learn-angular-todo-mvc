import { Component } from "@angular/core";
import { combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TodoService } from "../../services/todos.service";
import { FilterEnum } from "../../types/filter.enum";
import { TodoInterface } from "../../types/todo.interface";

@Component({
  selector: 'app-todos-list',
  templateUrl: './list.components.html',
})
export class TodoList {
  visibleTodos$: Observable<TodoInterface[]>;

  constructor(private todosService: TodoService) {
    // NOTE: combine two streams this.todosService.filter$ this.todosService.todos$
    this.visibleTodos$ = combineLatest(
      this.todosService.todos$,
      this.todosService.filter$,

      // NOTE: pipe combined sreams to RxJS operators
    ).pipe(
      // NOTE: callback arguments in the same order as combineLatest arguments
      map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
        // console.log('combine', todos, filter);
        switch (filter) {
          case FilterEnum.active:
            return todos.filter((todo) => !todo.isCompleted)
          case FilterEnum.completed:
            return todos.filter((todo) => todo.isCompleted)
          default:
            return todos;
        }

      }))
  }
}


