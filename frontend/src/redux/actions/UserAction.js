import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,

    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
    CLEAR_ERRORS
} from '../constants/UserConstant'

import axios from 'axios'

export const createUser = (formData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })
        let link = '/api/userInsert'

        const { data } = await axios.post(link, formData)
        //console.log(data)

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: err.response.data.message
        })
    }
}

export const loginUser = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const config = {
            headers: {
                "content-type": "application/json",
            }
        };

        let link = '/api/verifyLogin'

        const { data } = await axios.post(link, { email, password }, config)
        // console.log(data)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        })
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.message
        })
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        //console.log("loadind")
        dispatch({ type: LOAD_USER_REQUEST })

        let link = `/api/me`

        const { data } = await axios.get(link)
        //console.log(data)

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data.user
        })
    } catch (err) {
        dispatch({
            type: LOAD_USER_FAIL,
            payload: err.response.data.message
        })
    }
}

// Logout User
export const logout = () => async (dispatch) => {
    try {
        await axios.get(`/api/logout`);

        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
};

//Update profile
export const updateProfile = (formData) => async (dispatch) => {

    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        const { data } = await axios.post('/api/updateProfile', formData, config);
        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.user,
        });

        dispatch({ type: CLEAR_ERRORS });
        return Promise.resolve();
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message,
        });
        return Promise.reject(error);
    }
}

// Update Password
export const updatePassword = (oldPassword, newPassword, confirmPassword) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PASSWORD_REQUEST });

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const { data } = await axios.post('/api/updatePassword', { oldPassword, newPassword, confirmPassword }, config);

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data.success,
        });

        // Logout user after password update
        await axios.get(`/api/logout`);
        dispatch({ type: LOGOUT_SUCCESS });

        dispatch({ type: CLEAR_ERRORS });
        
        // Redirect to login page
        window.location.href = '/login';
        
    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
        
    }
};

// for clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
}