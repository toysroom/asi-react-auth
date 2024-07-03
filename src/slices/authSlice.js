import { createSlice } from '@reduxjs/toolkit'

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;

const initialState = {
    token,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveToken: (state, action) => {
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
        },
        removeToken: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        }
    }
});

export const { saveToken, removeToken } = authSlice.actions;

export const getToken = (state) => state.auth.token; 

export default authSlice.reducer