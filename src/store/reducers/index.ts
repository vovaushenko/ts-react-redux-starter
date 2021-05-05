import { combineReducers } from 'redux';
import { themeReducer } from './themeReducer';
import { usersReducer } from './usersReducer';

/*
    ==================
    Root Reducer
    =================
*/

export const rootReducer = combineReducers({
	theme: themeReducer,
	users: usersReducer,
});

/*
    ==================
    Get Reducer Type
    =================
*/
export type RootState = ReturnType<typeof rootReducer>;
