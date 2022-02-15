import React from 'react';
import "../../assets/css/index.css";

type buttonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ onClick }: buttonProps) => {
    return (
        <button id='getJokeButton' onClick={onClick}>Get joke</button>
    )
}
