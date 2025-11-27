import './App.css';
import React from 'react';

// הדרך החדשה להגדרת דיפולט
// export default function CardStudent({ student, color = 'blue'}){
//     return <>
//     <div className="card" style={ { color } }>
//         <h1>{ student.fname } { student.lname }</h1>
//         <h3>Age: { student.age }</h3>
//     </div>
//     </>
// }

// props = { student: ..., color: ... }
export default function CardStudent(props){
    return <>
    <div className="card" style={ { color: props.color } }>
        <h1>{ props.student.fname } { props.student.lname }</h1>
        <h3>Age: { props.student.age }</h3>
    </div>
    </>
}

// בגרסאות החדשות של ריאקט הדיפולט לא יעבוד
CardStudent.defaultProps = {
    color: 'blue'
}