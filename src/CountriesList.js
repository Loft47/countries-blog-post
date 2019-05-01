import React from 'react'
import CountriesListItem from './CountriesListItem';
import useFetchCountries from './useFetchCountries';
import isMostPopulous from './utils';

const wrapperStyle = {
  display: 'inline-grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridColumnGap: '20px',
  gridRowGap: '20px',
  width: '100%'
};

const CountriesList = () => {
  const countries = useFetchCountries();

  return (
    <div style={wrapperStyle}>
      {countries.map(country => (
        <CountriesListItem
          key={country.name}
          country={country}
          isMostPopulous={isMostPopulous(country, countries)}/>
      ))}
    </div>
  )
};

export default CountriesList
