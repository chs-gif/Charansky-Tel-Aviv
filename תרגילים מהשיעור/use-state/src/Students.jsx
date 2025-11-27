import { useState } from "react"

export default function StudentManager() {
    // useState - נועד להגדיר משתנים שאמורים להשפיע על הדום
    // הוא מקבל ערך דיפולטי שאיתו הוא יאתחל את המשתנה
    // ומחזיר מערך שבמקום הראשון יש את המשתנה שהגדיר, ובמקום השני פונקציה שמשנה את המשתנה הזה
    //setStudents = (value) => { students = value, גורמת לרינדור הדום על ידי השוואה בין הדום לוירטואל דום}
    const [students, setStudents] = useState(["Sara", "Ruth", "Rivka"])

    // function useState(defult){
    //     let a = defult;
    //     function b(value: type, (old: type) => type) {
    //         a = value.type = function ? value(a) : value
    //         // משווה בין הדום לוירטואל דום
    //     }
    //     return [a, b]
    // }

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