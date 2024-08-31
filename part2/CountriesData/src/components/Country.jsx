import Weather from "./Weather";
const Country = ({ country }) => {
  const flagStyle = {
    width: 'auto',
    height: 100,
    borderStyle: 'solid',
    borderColor: 'black',
  };

  return (
    <div>
      <h3>{country.name.common}</h3>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <br />
      <p><strong>languages:</strong></p>
      <ul>
        {/* displays the languages of the country by reading the languages object values */}
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img style={flagStyle} src={country.flags.png} alt={country.name.common} />
      <Weather state = {country.capital}/>
    </div>
  );
};

export default Country;
