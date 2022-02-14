import "../../assets/css/card.css"

import React from 'react';

export const Card = ({ p1, p2 }) => {
    return (
        <div id='container'>
            <div>
                <p>{p1}</p>
            </div> 
            <div>
                <p>{p2}</p>
            </div>
        </div>
        
    )
}