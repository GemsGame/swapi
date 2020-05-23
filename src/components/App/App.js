import React, { useState } from 'react';
import './App.scss';
import PlanetDetails from '../PlanetDetails';
import PersonDetails from '../PersonDetails';
import ItemList from '../ItemList';
import RandomPlanet from '../RandomPlanet';
import Spinner from '../Spinner';
import SwapiService from '../../services/swapi-service';

export const App = () => {
  const swapi = new SwapiService();
  const [personId, setPersonId] = useState();
  const handleChangeId = (id) => {
    setPersonId(id);
  };
  return (
    <div className="app">
      <RandomPlanet />
      <div className="app__row">
        <ItemList handleChangeId={handleChangeId} getData={swapi.getAllPeople.bind(swapi)} />
        <ItemList handleChangeId={handleChangeId} getData={swapi.getAllStarships.bind(swapi)} />
        <PersonDetails personId={personId} />
      </div>
    </div>
  );
};
