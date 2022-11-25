import { useState, useEffect } from 'react';
import axios from 'axios';
import ShowCountries from './components/ShowCountries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.official.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>find countries</h2>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      {countries.length !== 0 ? (
        <ShowCountries countries={filteredCountries} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
