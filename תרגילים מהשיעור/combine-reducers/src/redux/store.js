import { combineReducers, createStore } from "redux"
import { usersReducer } from "./usersSlice/reducer";
import { invitesReducer } from "./invitesSlice/reducer";
import { productsReducer } from "./productsSlice/reducer";

// מחבר את כל הרדוסרס לרדוסר אחד
const reducers = combineReducers({ 
    users: usersReducer,
    invites: invitesReducer,
    products: productsReducer
});

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// console.log('store: ', store)

// console.log('state: ', store.getState())

// store.dispatch({ type: 'RemoveInvite', payload: 2 })

// console.log('state: ', store.getState())

// store.dispatch({ type: 'SetPassword', payload: '456456!' })

// console.log('state: ', store.getState())