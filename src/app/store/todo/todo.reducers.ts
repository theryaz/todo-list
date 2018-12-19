import * as TodoActions from './todo.actions';


import { TodoItem } from 'src/app/shared/interfaces';

export interface State{
	adding_item: boolean,
	edit_index: number,
	todo_list: TodoItem[]
	error: Error
}

const INITIAL_STATE: State = {
	adding_item: false,
	edit_index: null,
	todo_list: [
		{
			title: "Add Persistent Storage",
			description: "There should be persistent storage via an API backend.",
			status: "In Progress",
			due_date: new Date("2018-12-19T18:55")
		},
		{
			title: "Allow editing status field",
			description: "The Status field on each todo needs to be editable",
			status: "In Progress",
			due_date: new Date("2018-12-19T19:00")
		}
	],
	error: null
};

export function reducer(state = INITIAL_STATE, action: TodoActions.TodoActions){
	switch(action.type){
		case TodoActions.BEGIN_ADD_ITEM:
			return {
				...state,
				adding_item: true
			};
		case TodoActions.CANCEL_ADD_ITEM:
			return {
				...state,
				adding_item: false
			};
		case TodoActions.ADD_ITEM:
			return {
				...state,
				todo_list:[
					action.payload,
					...state.todo_list,
				],
				adding_item: false
			};
		case TodoActions.ADD_ITEM_ERROR:
			return {
				...state,
				adding_item: false,
				error: action.payload
			};
		case TodoActions.BEGIN_EDIT_ITEM:
			return {
				...state,
				edit_index: action.payload
			};
		case TodoActions.CANCEL_EDIT_ITEM:
			return {
				...state,
				edit_index: null
			};
		case TodoActions.EDIT_ITEM:
			let new_list = state.todo_list.slice();
			new_list[action.payload.index] = action.payload.item;
			return {
				...state,
				todo_list: new_list,
				edit_index: null
			};
		case TodoActions.DELETE_ITEM:
			let delete_list = [...state.todo_list];
			delete_list.splice(action.payload,1);
			return {
				...state,
				todo_list: delete_list
			};
		default:
			return state;
	}
}
