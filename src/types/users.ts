/*
        === Main Interface ===
*/
export interface UsersState {
	users: any[];
	loading: boolean;
	error: null | string;
}

/*
        === Action Types ===
*/
export enum UsersActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

/*
        === Action Interfaces ===
*/

interface FetchUsersAction {
	type: UsersActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
	type: UsersActionTypes.FETCH_USERS_SUCCESS;
	payload: any[];
}
interface FetchUsersErrorAction {
	type: UsersActionTypes.FETCH_USERS_ERROR;
	payload: string;
}

/*
        === Combined Action Interface ===
*/
export type UserAction =
	| FetchUsersAction
	| FetchUsersSuccessAction
	| FetchUsersErrorAction;
