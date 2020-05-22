import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi-service';
import './PersonDetails.scss';
import Spinner from '../Spinner';

export const PersonDetails = ({ personId }) => {
  const [person, setPerson] = useState(false);
  const swapi = new SwapiService();
  const updatePerson = () => {
    if (personId) {
      swapi.getPerson(personId).then((result) => setPerson(result));
    }
  };
  useEffect(() => {
    updatePerson();
  }, [personId]);

  if (!person) {
    return <Spinner />;
  }
  const {
    name, height, mass, hair_color,
  } = person;
  return (
    <div className="person-details">
      <div className="person-details__column">
        <div className="person-details__image">
          <img alt="person" src={`https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`} />
        </div>
      </div>
      <div className="person-details__column">
        <div className="person-details__column-content">
          <div className="person-details__text">
            <h1>{name}</h1>
          </div>
          <div className="person-details__text">
            <ul className="person-details__ul">
              <li className="person-details__li">
                <div className="mark" />
                height:
                {height}
              </li>
              <li className="person-details__li">
                <div className="mark" />
                mass:
                {mass}
              </li>
              <li className="person-details__li">
                <div className="mark" />
                hair color:
                {hair_color}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

PersonDetails.propTypes = {
  personId: PropTypes.string,
};

PersonDetails.defaultProps = {
  personId: '2',
};
