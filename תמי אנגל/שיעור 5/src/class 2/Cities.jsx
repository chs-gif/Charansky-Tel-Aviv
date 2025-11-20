// Cities.jsx
import { useState } from "react";

export default function CitiesList() {
  const cities = ["Ramat Gan", "Bnei Brak", "Beit Shemesh"];
  const [checkedCities, setCheckedCities] = useState([]);

  function cityCheckedChanged(city) {
    setCheckedCities(prev =>
      prev.includes(city)
        ? prev.filter(c => c !== city)
        : [...prev, city]
    );
  }

  return (
    <>
      {cities.map((city, index) => (
        <div key={index}>
          <input
            type="checkbox"
            onChange={() => cityCheckedChanged(city)}
            checked={checkedCities.includes(city)}
          />
          <label>{city}</label>
        </div>
      ))}
      <h4>{checkedCities.join(", ")}</h4>
    </>
  );
}
