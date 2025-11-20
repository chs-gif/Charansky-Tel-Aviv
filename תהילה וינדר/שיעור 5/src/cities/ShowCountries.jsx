export default function ShowCountries(props) {
    // function cityCheckedChanged(city){}
    return <>
        {props.lands.map((land, index) => <div key={index}>
            <input type='radio' name="country"
                onClick={() => { props.selectedCountrie(land) }} />
            <label>{land}</label>
        </div>)}
        {/* <h4>{ checkesCities.join(', ') }</h4> */}
    </>
}