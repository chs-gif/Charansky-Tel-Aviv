import { useState } from "react"

export default function CitiesList(){
    const cities = ['Jerusalem', 'Ashdod', 'Bne-Brack']
    const [checkedCities, setCheckedCities] = useState([])

    function checkedCitiesChanged(city){
        // includes - בודק אם האיבר קיים במערך
        // filter - מחזיר מערך חדש עם כל האיברים שעונים על התנאי
         setCheckedCities(checkedCities.includes(city) ? checkedCities.filter(c => c!==city) : [...checkedCities, city])
    }

    return <>
        {/* map - עובר על כל האיברים במערך, ומפעיל עליהם את הפנקציה שקיבל - מחזיר מערך חדש */}
        { cities.map((city, index) => <div key={ index }>
                <input type='checkbox' onClick={ () => checkedCitiesChanged(city) }/>
                <label>{ city }</label>
            </div>) }
            {/* join - משרשר את המערך לסטרינג, ושם בין איבר לאיבר את הערך שקיבל */}
            <h4>{ checkedCities.join(', ') }</h4>   
    </>
}