import React, { useEffect, useState } from 'react'
import useFetchCountries from './useFetchCountries';
import isMostPopulous from './utils';

const CountryDetail = (props) => {
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetchCountry(props.match.params.name)
  }, [props.match.params.name]);

  const countries = useFetchCountries();

  const fetchCountry = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;

    fetch(url)
      .then((data) => (
        data.json()
      ))
      .then(json => {
        const country = json[0];
        setCountry(country)
      })
  };

  return (
    <div style={{display: 'flex'}}>
      <div style={{width: '300px', marginRight: '20px'}}>
        <img style={{width: '100%'}} src={country.flag} alt="Flag"/>
      </div>
      <div>
        <h1>{country.name}</h1>
        <h2>Region: <em>{country.subregion}</em></h2>
        {isMostPopulous(country, countries) && (<h3>The most populous country in Americas!</h3>)}
      </div>
    </div>
  )

};

export default CountryDetail
