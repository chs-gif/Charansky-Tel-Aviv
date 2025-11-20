import './app.css'
function CardStudent(props){
    return <div className="card" style={{color: props.color}}>
        <h1>{ props.student.fname} { props.student.lname}</h1>
    </div>
}