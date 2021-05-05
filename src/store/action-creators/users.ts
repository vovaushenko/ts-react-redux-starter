import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UsersActionTypes } from '../../types/users';

const URL = 'https://jsonplaceholder.typicode.com/users';
/*
    =====================================================================
    url API response: [{user1}, {user2}, ...]
    ====================================================================
*/

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UsersActionTypes.FETCH_USERS });
			const response = await axios.get(`${URL}`);
			const users = response.data;

			dispatch({
				type: UsersActionTypes.FETCH_USERS_SUCCESS,
				payload: users,
			});
		} catch (error) {
			dispatch({
				type: UsersActionTypes.FETCH_USERS_ERROR,
				payload: error.message,
			});
		}
	};
};
