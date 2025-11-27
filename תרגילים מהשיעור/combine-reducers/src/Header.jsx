import { useSelector } from "react-redux"

export default function Header(){
    const password = useSelector(state => state.users.usersList[0].password)

    return <h1>Password from Header: { password }</h1>
}