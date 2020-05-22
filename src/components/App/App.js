import React, { useState } from 'react';
import './App.scss';
import PlanetDetails from '../PlanetDetails';
import PersonDetails from '../PersonDetails';
import ItemList from '../ItemList';
import RandomPlanet from '../RandomPlanet';
import Spinner from '../Spinner';

export const App = () => {
  const [personId, setPersonId] = useState();
  const handleChangeId = (id) => {
    setPersonId(id);
  };
  return (
    <div className="app">
      <RandomPlanet />
      <div className="app__row">
        <ItemList/>

      </div>
    </div>
  );
};
