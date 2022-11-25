import { useState, useEffect } from 'react';
import axios from 'axios';
const api_key = process.env.REACT_APP_API_KEY;

const ShowCountry = ({ country }) => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  }, [country]);

  return (
    <div>
      <h2>{country.name.common}</h2>

      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <b>
        <p>languages:</p>
      </b>
      <ul>
        {Object.values(country.languages).map((val) => {
          return <li key={val}>{val}</li>;
        })}
      </ul>
      <img src={country.flags.png} alt={`flag of ${country.name.common}`} />

      <h2>Weather in {country.capital}</h2>
      {weatherData ? (
        <div>
          <p>temperature is {weatherData.main.temp} Celsius</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather"
          />
          <p>wind {weatherData.wind.speed} m/s</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ShowCountry;
