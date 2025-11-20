import ShowCountries from "./ShowCountries"
import ShowCities from "./ShowCities"
import { useState } from "react";
export default function CountriesManager(){
    const [city,setCity]=useState([]);
    const countries={
        'israel': ['jerusalem','tel aviv'],
        'austria' : ['wien','insbruck'],
    }
    function selectCountrie(countrie){
                setCity(city[0]==countries[countrie][0] ? []:countries[countrie])
  
    }
    return<>
    <ShowCountries lands={Object.keys(countries)} selectedCountrie={selectCountrie}></ShowCountries>
    <ShowCities cities={city}></ShowCities> 
    </>
    
}