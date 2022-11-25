import ShowCountry from './ShowCountry';
import CountriesForm from './CountriesForm';

const ShowCountries = ({ countries }) => {
  if (countries.length > 10 && countries.length > 0) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length <= 10 && countries.length > 1) {
    return <CountriesForm countries={countries} />;
  } else if (countries.length === 1) {
    return <ShowCountry country={countries[0]} />;
  }
};

export default ShowCountries;
