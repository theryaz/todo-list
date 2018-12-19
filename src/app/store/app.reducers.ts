import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import * as fromTodo from 'src/app/store/todo/todo.reducers';
import { RouterStateUrl } from 'src/app/store/router-serializer';


export interface AppState{
	todo_state: fromTodo.State,
	router_state: RouterReducerState<RouterStateUrl>,
};

export const reducers: ActionReducerMap<AppState> = {
	todo_state: fromTodo.reducer,
	router_state: routerReducer,
};
