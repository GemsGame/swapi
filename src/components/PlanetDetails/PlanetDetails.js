import React from 'react'
import './PlanetDetails.scss';

export const PlanetDetails = () => {
    return (

        <div className="planet-details">
            <div className="planet-details__column">
                <div className="planet-details__image">
                    <img src="https://starwars-visualguide.com/assets/img/planets/2.jpg" />
                </div>
            </div>
            <div className="planet-details__column">
            <div className="planet-details__column-content">
                <div className="planet-details__text">
                    <h1>Planet name</h1>
                </div>
                <div className="planet-details__text">
                    <ul className="planet-details__ul">
                        <li className="planet-details__li"><div className="mark"></div> Rotation period: 23</li>
                        <li className="planet-details__li"><div className="mark"></div> Rotation period: 23</li>
                        <li className="planet-details__li"><div className="mark"></div> Rotation period: 23</li>
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
