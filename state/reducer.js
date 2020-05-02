// We need React in scope to create our context objects
import React from "react";

// Reducer functions
import {adduser, removeuser} from './reducerfunctions'
// Contexts
// will be used to pass down the dispatch method and our 
// application state via the Context Provider and consumed 
// in child components using the useContext Hook
export const StateContext = React.createContext(null); 
export const UserManagementContext = React.createContext(null);

// Action constants
// we will import this object and use the various properties 
// in child objects when calling the dispatch method
export const actions = {
    GET_USERS: "get users",
    GET_USERS_SUCCESS: "get users success",
    ADD_USER: "add user",
    REMOVE_USER: "remove user",
    ERROR: "error",
    CLRERROR: "clear error"
};

// This is a simple helper function that will take a type 
// (from the constants above) and a payload, which will be the 
// value which needs to be affected in state it returns 
// a simple object that will be passed to our dispatch function
export const createAction = (type, payload) => {
    return {
    type,
    payload
    };
};

// Reducer
// the function that accepts our app state, and the action to 
// take upon it, which then carries out that action
export const reducer = (state, action) => {
    switch (action.type) {
    case actions.ERROR:
        return {
        ...state,
            loadingError: true,
        };
    case actions.CLRERROR:
        return {
        ...state,
            loadingError: false,
        };
    case actions.GET_USERS:
        return {
        ...state,
            loadingUsers: true,
        };
    case actions.GET_USERS_SUCCESS:
        return {
        ...state,
        loadingUsers: false
        };
    case actions.ADD_USER:
        return  adduser(state, action)
    case actions.REMOVE_USER:
        return {
        ...state,
        userList: removeuser(state, action)
        };
    default:
        return state;
    }
};