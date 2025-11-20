export default function ShowCities(props){
   return <>
      {props.cities.map((city, index) => <div key={index}>
         
         <h1>{city}</h1>
      </div>)}
   </>
}