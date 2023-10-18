import Weather from './Weather'

function Country({ country }) {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.svg} alt={country.flags.alt} width='160' />
      <Weather capital={country.capital} />
    </div>
  )
}

export default Country