import axios from "axios";

export const getJoke = async props => {
    return await axios.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist&type=twopart");
}