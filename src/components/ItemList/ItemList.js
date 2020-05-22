import React, { useState } from 'react'
import './ItemList.scss';

export const ItemList = () => {
const { state,setState} = useState();
    return (
        <div className="item-list">
            <div className="item-list__text">
               <div className="item-list__item">1</div>
               <div className="item-list__item">2</div>
               <div className="item-list__item">3</div>
               <div className="item-list__item">4</div>
            </div>
       </div>
   
    )
}
