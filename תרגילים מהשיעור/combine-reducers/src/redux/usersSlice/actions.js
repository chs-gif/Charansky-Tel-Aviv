export function updateUserPassword(userName, password){
    return { type: 'updateUserPassword', payload: { userName, password } }
}