import { useDispatch, useSelector } from "react-redux"
import { setUserName } from "./redux/actions"

export default function Main(){
    // מביא נתונים מהסטור (לפי מה שהגדרנו)
    const userName = useSelector(state => state.userName)

    //מביא לנו את הפונקציה 'dispatch' של הסטור - הפונקציה שדרכה אנחנו משנים נתונים בסטור
    const dispatch = useDispatch()

    return <>
        <h2>User name from Main: { userName }</h2>
        <input onChange={ e => dispatch(setUserName(e.target.value)) }/>
    </>
}