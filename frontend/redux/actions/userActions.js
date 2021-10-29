import { userInfo } from '../../constants/storageKeys';
import {
	USER_GET_FROM_STORAGE,
	USER_LOGIN_REQUEST,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILED,
	USER_LOGOUT,
} from '../actionTypes';
import { axiosPost } from '../../axios.config';

export const getUserFromStorage = () => (dispatch) => {
	const user = JSON.parse(localStorage.getItem(userInfo));
	dispatch({ type: USER_GET_FROM_STORAGE, payload: user });
};

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });
		const { data } = await axiosPost('/api/users/login', { email, password });
		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
		localStorage.setItem(userInfo, JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAILED,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const logout = () => (dispatch) => {
	localStorage.removeItem(userInfo);
	dispatch({ type: USER_LOGOUT });
};
