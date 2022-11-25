import React, { useState } from 'react';
import ShowCountry from './ShowCountry';

const CountriesForm = ({ countries }) => {
  const [showComponent, setShowComponent] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({});

  console.log(countries);
  if (showComponent) {
    return <ShowCountry country={selectedCountry} />;
  }
  return countries.map((country) => {
    return (
      <div key={country.name.common}>
        {country.name.common}
        <button
          onClick={() => {
            setShowComponent(true);
            setSelectedCountry(country);
          }}
        >
          Show
        </button>
      </div>
    );
  });
};

export default CountriesForm;
