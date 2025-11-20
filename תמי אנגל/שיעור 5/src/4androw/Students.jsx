export default function Students(){
    const Students = [
        { fname: 'Sara', lname: 'Cohen', age: 19, color: "blue"}, 
        { fname: 'Leah', lname: 'Engel', age: 20, color: "red"}, 
        { fname: 'Rivkah', lname: 'levi', age: 29, color: "pink"}, 
        { fname: 'Rachel', lname: 'Israel', age: 18, color: "yellow"}
    ]
    return <>
    <CardStudent Student={Students[0]}/>
    <CardStudent Student={Students[1]}/>
    <CardStudent Student={Students[2]}/>
    <CardStudent Student={Students[3]}/>

    </>
}
export const a = 1;