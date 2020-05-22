import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi-service';
import './ItemList.scss';
import Spinner from '../Spinner';

export const ItemList = ({ handleChangeId }) => {
  const [people, setPeople] = useState([]);
  const swapi = new SwapiService();
  useEffect(() => {
    swapi.getAllPeople().then((p) => setPeople(p));
  }, []);
  if (!people) {
    return <Spinner />;
  }
  const renderItems = (arr) => arr.map((item, i) => <div key={item.id} className="item-list__item" onClick={() => handleChangeId(item.id)} onKeyUp={() => handleChangeId(item.id)} role="link" tabIndex="0">{item.name}</div>);
  const result = renderItems(people);
  return (
    <div className="item-list col-12">
      <div className="item-list__text">
        {result}
      </div>
    </div>
  );
};
ItemList.propTypes = {
  handleChangeId: PropTypes.func,
};

ItemList.defaultProps = {
  handleChangeId: () => (false),
};
