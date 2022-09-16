import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: null,
    token: null,
    email: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.email = action.payload.email;
        },
        deleteUser(state) {
            state.id = null;
            state.token = null;
            state.email = null;
        }
    }
});

const {reducer: userReducer, actions: {setUser, deleteUser}} = userSlice;

export {userReducer, setUser, deleteUser};