import React from 'react';
import "../../assets/css/index.css";

export const Button = ({onClick}) => {
    return (
        <button id='getJokeButton' onClick={onClick}>Get joke</button>
    )
}
