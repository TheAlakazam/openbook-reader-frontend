import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { loginUser, loginData } from '../api/AuthService';
import { useHistory } from 'react-router-dom';

export interface loginInfo {
    username: string;
    token: string;
    loggedIn: boolean;
};

export interface userInfo {
    username: string;
    token: string;
};

const initialState : loginInfo = {
    username: "",
    token: "",
    loggedIn: false
};

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loading: state => {
            state.loggedIn = true;
        },

        login: (state, action : PayloadAction<userInfo>) => {
            state.username = action.payload.username;
            state.token = action.payload.token;
            state.loggedIn = true;
            localStorage.setItem("token", action.payload.token);
        },

        logout: state => {
            state.token = "";
            state.loggedIn = false;
            state.username = "";
            localStorage.removeItem("token");
        }
    }
});

export const loginUserAsync = (data : loginData, history : any) => (
    (dispatch : Dispatch) => {
        dispatch(loading());
        loginUser(data)
            .then(res => {
                const data = res.data;
                dispatch(login(data));
                history.push("/");
            });
    }
);

export const { loading, login, logout } = slice.actions;
const userReducer = slice.reducer;
export default userReducer;