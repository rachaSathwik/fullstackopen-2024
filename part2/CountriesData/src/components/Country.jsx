const Country = ({ country }) => {
  const flagStyle = {
    width: 100,
    height: 100,
  };

  return (
    <div>
      <h3>{country.name.common}</h3>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <br />
      <p><strong>languages:</strong></p>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img style={flagStyle} src={country.flags.png} alt={country.name.common} />
    </div>
  );
};

export default Country;
