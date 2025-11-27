import { useSelector } from "react-redux"

export default function Header(){
    const userName = useSelector(state => state.userName)

    return <h1>User name from Header: { userName }</h1>
}