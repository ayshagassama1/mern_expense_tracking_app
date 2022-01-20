import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constances/userConstance"

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST});

        const config = {
            Headers: {
                "content-type": "application/json",

            },
        };

        const  { data} = await axios.post(
            "api/users/login",
            {email, password},
            config
        );

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            :error.message,

        });
    }
};

export const logout = (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT});
};

export const register = (firstName, lastName,email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST});

        const config = {
            Headers: {
                "content-type": "application/json",

            },
        };

        const  { data} = await axios.post(
            "api/users",
            {firstName,lastName,email, password},
            config
        );

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

        localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            :error.message,

        });
    }
};

