import React, { Component } from 'react'
import CountriesListItem from './CountriesListItem';

const wrapperStyle = {
  display: 'inline-grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridColumnGap: '20px',
  gridRowGap: '20px',
  width: '100%'
};

class CountriesList extends Component {
  state = {
    countries: []
  };

  componentDidMount() {
    this.fetchCountries()
  }

  render() {
    return (
      <div style={wrapperStyle}>
        {this.state.countries.map(country => (
          <CountriesListItem
            key={country.name}
            country={country}
            isMostPopulous={this.isMostPopulous(country, this.state.countries)} />
        ))}
      </div>
    )
  }

  fetchCountries = () => {
    const url = 'https://restcountries.eu/rest/v2/region/americas';

    fetch(url)
      .then((data) => (
        data.json()
      ))
      .then(countries => {
        this.setState({countries})
      })
  };

  isMostPopulous = (country, countries) => {
    return countries.every(c => country.population >= c.population)
  };
}

export default CountriesList
