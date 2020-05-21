import React, { useState, useEffect } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';

export const RandomPlanet = () => {
    const swapi = new SwapiService();
    const [state, setState] = useState({});
    const [loader, setLoader] = useState(true);

    const onPlanetLoaded = (planet) => {
        setState(planet);
        setLoader(false);
    }
    const updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 2);
        swapi.getPlanet(id).then(planet => onPlanetLoaded(planet));
    };

    useEffect(() => {
        updatePlanet();
    }, []);

    const { id = 2, name, population, rotationPeriod, diameter } = state;
    if (loader) {
        return <div className="planet-details">
            <Spinner />
        </div>;
    } else
        return (
            <div className="planet-details">
                <div className="planet-details__column">
                    <div className="planet-details__image">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                    </div>
                </div>
                <div className="planet-details__column">
                    <div className="planet-details__column-content">
                        <div className="planet-details__text">
                            <h1>{name}</h1>
                        </div>
                        <div className="planet-details__text">
                            <ul className="planet-details__ul">
                                <li className="planet-details__li"><div className="mark"></div> population: {population}</li>
                                <li className="planet-details__li"><div className="mark"></div> rotation period: {rotationPeriod}</li>
                                <li className="planet-details__li"><div className="mark"></div> diameter: {diameter}</li>
                                <li className="planet-details__li"><div className="mark"></div> Rotation period: 23</li>
                                <li className="planet-details__li"><div className="mark"></div> Rotation period: 23</li>
                                <li className="planet-details__li"><div className="mark"></div> Rotation period: 23</li>
                                <li className="planet-details__li"><div className="mark"></div> Rotation period: 23</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )
}

