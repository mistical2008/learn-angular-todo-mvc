import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodosComponent } from "src/app/todo/components/todos/todos.component";
import { HeaderComponent } from "src/app/todo/components/header/header.component";
import { TodoService } from "./services/todos.service";
import { TodoList } from "./components/list/list.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: TodosComponent
  }
]

@NgModule({
  declarations: [TodosComponent, HeaderComponent, TodoList],
  imports: [CommonModule, RouterModule.forChild(routes)],

  // NOTE: Bind services to module with 'providers' property
  providers: [TodoService],
})
export class TodosModule { }
