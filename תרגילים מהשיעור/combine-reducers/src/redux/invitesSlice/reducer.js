import { produce } from "immer"

const initialState = {
    dateOfLastInvite: '03.11.2025',
    invites: [
        { id: 1, item: 'Table', amount: 1 },
        { id: 2, item: 'Chair', amount: 6 },
        { id: 3, item: 'Bed', amount: 2 }
    ]
}

export const invitesReducer = produce((state, action) => {
    switch (action.type) {
        case 'addInvite':
            state.invites.push(action.payload)
            break
        case 'removeInvite':
            state.invites = state.invites.invites.filter(u => u.id !== action.payload)
            break
        case 'setDateOfLastInvite':
            state.dateOfLastInvite = action.payload;
            break
    }
}, initialState)