import { Action } from '@ngrx/store';

import { TodoItem } from 'src/app/shared/interfaces';

export const BEGIN_ADD_ITEM = 'BEGIN_ADD_ITEM';
export const CANCEL_ADD_ITEM = 'CANCEL_ADD_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_ERROR = 'ADD_ITEM_ERROR';

export const BEGIN_EDIT_ITEM = 'BEGIN_EDIT_ITEM';
export const CANCEL_EDIT_ITEM = 'CANCEL_EDIT_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';



export class BeginAddItem implements Action{
	readonly type = BEGIN_ADD_ITEM;
	constructor(){}
}
export class CancelAddItem implements Action{
	readonly type = CANCEL_ADD_ITEM;
	constructor(){}
}
export class AddItem implements Action{
	readonly type = ADD_ITEM;
	constructor(public payload: TodoItem){}
}
export class AddItemError implements Action{
	readonly type = ADD_ITEM_ERROR;
	constructor(public payload: Error){}
}
export class BeginEditItem implements Action{
	readonly type = BEGIN_EDIT_ITEM;
	constructor(public payload: number){}
}
export class CancelEditItem implements Action{
	readonly type = CANCEL_EDIT_ITEM;
	constructor(){}
}
export class EditItem implements Action{
	readonly type = EDIT_ITEM;
	constructor(public payload: {index: number, item: TodoItem}){}
}
export class DeleteItem implements Action{
	readonly type = DELETE_ITEM;
	constructor(public payload: number){}
}

export type TodoActions =
	BeginAddItem |
	CancelAddItem |
	AddItem |
	AddItemError |
	BeginEditItem |
	CancelEditItem |
	EditItem |
	DeleteItem;
