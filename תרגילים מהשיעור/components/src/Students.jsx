import CardStudent from "./Card";

export default function Students(){
    const students = [
        { fname: 'Sara', lname: 'Cohen', age: 14 },
        { fname: 'Chana', lname: 'Levi', age: 14 },
        { fname: 'Rivka', lname: 'Bar', age: 14 },
        { fname: 'Rachel', lname: 'Katz', age: 14 }
    ]

    return <>
    <CardStudent student={students[0]} color='red'/>
    <CardStudent student={students[1]} color='yellow'/>
    <CardStudent student={students[2]}/>
    <CardStudent student={students[3]} color='green'/>
    </>
}

export const a = 1;