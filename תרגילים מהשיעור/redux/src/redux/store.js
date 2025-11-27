import { produce } from "immer"
import { createStore } from "redux"

// האתחול של הנתונים בסטור
const initialState = {
    userName: 'Hadas',
    password: '123123!',
    invites: [
        { id: 1, item: 'Table', amount: 1 },
        { id: 2, item: 'Chair', amount: 6 },
        { id: 3, item: 'Bed', amount: 2 }
    ]
}

// פונקציה שמגדירה מה לשנות עבור כל אקשן - משנה את הנתונים בסטור
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SetUserName':
            state.userName = action.payload
            break
        case 'SetPassword':
            state.password = action.payload
            break
        case 'AddInvite':
            state.invites.push(action.payload)
            break
        case 'RemoveInvite':
            state.invites = state.invites.filter(invite => invite.id !== action.payload)
            break
    }
}, initialState)

// יצירת הסטור בעצמו
export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// console.log('store: ', store)

// console.log('state: ', store.getState())

// store.dispatch({ type: 'RemoveInvite', payload: 2 })

// console.log('state: ', store.getState())

// store.dispatch({ type: 'SetPassword', payload: '456456!' })

// console.log('state: ', store.getState())