import { useDispatch, useSelector } from "react-redux"
import { updateUserPassword } from "./redux/usersSlice/actions"

export default function Main(){
    const user = useSelector(state => state.users.usersList[0])

    const dispatch = useDispatch()

    return <>
        <h2>Password from Main: { user.password }</h2>
        <input onChange={ e => dispatch(updateUserPassword(user.userName, e.target.value)) }/>
    </>
}