import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromApp from 'src/app/store/app.reducers';
import * as fromTodo from 'src/app/store/todo/todo.reducers';

import * as TodoActions from 'src/app/store/todo/todo.actions';

import { TodoItem } from 'src/app/shared/interfaces';

import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todo_state: Observable<fromTodo.State>;

  public edit_todo_form: {
    title: string,
    description: string,
    status: string,
    due_date: Moment
  };

  public todo_form: {
    title: string,
    description: string,
    due_date: Moment
  };

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.todo_state = this.store.select('todo_state');
  }

  beginAddItem(){
    this.todo_form = {
      title: null,
      description: null,
      due_date: null,
    };
    this.store.dispatch(new TodoActions.BeginAddItem());
  }
  cancelAddItem(){
    this.store.dispatch(new TodoActions.CancelAddItem());
  }
  addItem(){
    this.store.dispatch(new TodoActions.AddItem({
      title: this.todo_form.title,
      description: this.todo_form.description,
      status: "Pending",
      due_date: this.todo_form.due_date.toDate()
    }));
  }
  addItemError(){
    this.store.dispatch(new TodoActions.AddItemError(new Error("Invalid Date")));
  }

  beginEditItem(i: number){
    this.todo_state.pipe(take(1)).subscribe((todo_state: fromTodo.State) =>{
      this.edit_todo_form = {
        title: todo_state.todo_list[i].title,
        description: todo_state.todo_list[i].description,
        status: todo_state.todo_list[i].status,
        due_date: moment(todo_state.todo_list[i].due_date),
      };
      this.store.dispatch(new TodoActions.BeginEditItem(i));
    });
  }
  cancelEditItem(){
    this.store.dispatch(new TodoActions.CancelEditItem());
  }
  editItem(i: number){
    this.store.dispatch(new TodoActions.EditItem({
      index: i,
      item: {
        title: this.edit_todo_form.title,
        description: this.edit_todo_form.description,
        status: this.edit_todo_form.status,
        due_date: this.edit_todo_form.due_date.toDate(),
      }
    }));
  }
  deleteItem(i: number){
    this.store.dispatch(new TodoActions.DeleteItem(i));
  }
}
