import { produce } from "immer"

const initialState = {
    materials: ['Bambook', 'MDF'],
    productsList: [{ item: 'Table', Price: 100, amount: 80 }, { item: 'Chair', Price: 50, amount: 100 }]
}


export const productsReducer = produce((state, action) => {
    switch (action.type) {
        case 'SetMaterial':
            state.materials.push(action.payload)
            break
    }
}, initialState)