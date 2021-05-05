import { UserAction, UsersActionTypes, UsersState } from '../../types/users';

/*
    ==================
    Initial State
    =================
*/
const initialState: UsersState = {
	users: [],
	loading: false,
	error: null,
};
/*
    ==================
    Users Reducer
    =================
*/
export const usersReducer = (
	state: UsersState = initialState,
	action: UserAction
) => {
	switch (action.type) {
		case UsersActionTypes.FETCH_USERS:
			return { ...state, loading: true };

		case UsersActionTypes.FETCH_USERS_SUCCESS:
			return { ...state, loading: false, users: action.payload };

		case UsersActionTypes.FETCH_USERS_ERROR:
			return { ...state, loading: false, error: action.payload };

		default:
			return state;
	}
};
