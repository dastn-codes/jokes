import "../../assets/css/card.css"

import React from 'react';
type cardProps = {
    p1: string,
    p2: string
}
export const Card = ({ p1, p2 }: cardProps) => {
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