import { useState } from "react"

export default function StudentManager() {
    //setStudents = (value) => { students = value, גורמת לרינדור הדום על ידי השוואה בין הדום לוירטואל דום}
    const [students, setStudents] = useState(["Sara", "Ruth", "Rivka"])

    function addStudent(e){
        /// rest operation - שופך את כל האיברים של המערך לתוך המערך החדש (...)
        setStudents([...students, e.target.value])
    }

    return <>
        <ul>
            { students.map(s => <li>{ s }</li>) }
            <input onBlur={ addStudent }/>
        </ul>
    </>
}