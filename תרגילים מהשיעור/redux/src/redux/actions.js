// פונקציה שמחזירה אקשן
export function setUserName(userName){
    return { type: 'SetUserName', payload: userName }
}