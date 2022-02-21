import "../assets/css/app.css";

import React, { useState, useEffect } from "react";
import { Button } from './Button';
import { Card } from "./Card";
import { Background } from "./Background";
import { getJoke } from "../assets/js/axios";


export const App: React.FC = () => {
    const [part1, setJokePart1] = useState("");
    const [part2, setJokePart2] = useState("");

    const simulateButtonClick = () => {
        getJoke()
            .then(res => {
               setJokePart1(res.data.setup);
               setJokePart2(res.data.delivery)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        simulateButtonClick()
    }, [])

    return (
        <>
            <div id="app">
                <div>
                    <Card p1={part1} p2={part2} />
                    <Button onClick = {simulateButtonClick} />
                </div>
            </div>
            <Background />
        </>
    )
}