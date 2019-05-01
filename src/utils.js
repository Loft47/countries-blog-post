const isMostPopulous = (country, countries) => {
  return countries.every(c => country.population >= c.population)
};

export default isMostPopulous
