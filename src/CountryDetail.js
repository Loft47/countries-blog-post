import React, { Component } from 'react'

class CountryDetail extends Component {
  state = {
    country: {},
    countries: []
  };

  componentDidMount() {
    this.fetchCountry(this.props.match.params.name);
    this.fetchCountries()
  }

  render() {
    const {country, countries} = this.state;

    return (
      <div style={{display: 'flex'}}>
        <div style={{width: '300px', marginRight: '20px'}}>
          <img style={{width: '100%'}} src={this.state.country.flag} alt="Flag"/>
        </div>
        <div>
          <h1>{country.name}</h1>
          <h2>Region: <em>{country.subregion}</em></h2>
          {this.isMostPopulous(country, countries) && (<h3>The most populous country in Americas!</h3>)}
        </div>
      </div>
    )
  }

  fetchCountry = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;

    fetch(url)
      .then((data) => (
        data.json()
      ))
      .then(json => {
        const country = json[0];
        this.setState({country})
      })
  };

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

export default CountryDetail
