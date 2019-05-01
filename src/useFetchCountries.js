import { useState, useEffect } from 'react'

const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = 'https://restcountries.eu/rest/v2/region/americas';

    fetch(url)
      .then((data) => (
        data.json()
      ))
      .then(countries => {
        setCountries(countries)
      })
  }, []);

  return countries
};

export default useFetchCountries
