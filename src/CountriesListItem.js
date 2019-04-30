import React from 'react'
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const CountriesListItem = ({country, isMostPopulous}) => (
  <Card title={country.name} >
    <div>Is the most populous country? {isMostPopulous ? 'Yes! ⭐' : 'Nope!'}</div>
    <Meta title={<Link to={`/country/${country.name}`}>View country</Link>} />
  </Card>
);

export default CountriesListItem
