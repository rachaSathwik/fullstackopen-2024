import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
const App = () => {
  const [country, setCountry] = useState('');
  const [results, setResults] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all';

  useEffect(() => {
    console.log('fetching countries');
    axios.get(baseUrl)
      .then(response => {
        console.log(response.data);
        setResults(response.data);
      });
  }, []);

  useEffect(() => {
    const filtered = results.filter(c =>
      c.name.common.toLowerCase().includes(country.toLowerCase())
    );
    setFilteredCountries(filtered);
    console.log(filtered.length);
  },[country,results])


  const handleChange = (event) => {
    setCountry(event.target.value);
  }

  return (
    <div>
      find countries:
      <input value={country} onChange={handleChange} />
      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} />
      ) : (
        <div>
          {filteredCountries.map(c => <p>{c.name.common}</p>)}
          <br />
        </div>
      )}
    </div>
  );
}

export default App;
