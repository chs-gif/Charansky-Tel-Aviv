import { produce } from "immer"

const initialState = {
    usersList: [{ userName: 'Ruth', password: 'Aa123!' }, { userName: 'Sara', password: 'Bb456!' }]
}

export const usersReducer = produce((state, action) => {
    switch (action.type) {
        case 'addUser':
            state.usersList.push(action.payload)
            break
        case 'removeUser':
            state.usersList = state.users.usersList.filter(u => u.id !== action.payload)
            break
        case 'updateUserPassword':
            const index = state.usersList.findIndex(u => u.userName === action.payload.userName)
            state.usersList[index].password = action.payload.password
            break
    }
}, initialState)