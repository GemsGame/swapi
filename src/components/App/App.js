import React from 'react';
import './App.scss';
import PlanetDetails from '../PlanetDetails';
import PersonDetails from '../PersonDetails';
import ItemList from '../ItemList';
import RandomPlanet from '../RandomPlanet';
import Spinner from '../Spinner';

export const App = () => {
    return (
        <div className="app">
            <div className="app__wrapper">
                <PlanetDetails />
                <ItemList/>
                <PersonDetails/>
                <RandomPlanet/>
            
            </div>
        </div>
    )
}
