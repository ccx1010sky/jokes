import React, {useEffect, useState} from "react";
import PunchlineComponent from "../components/PunchlineComponent";

const JokeContainer = () => {

    const [joke, setJoke] = useState({setup: "", delivery: ""});
    const [punchlineClicked, setPunchlineClicked] = useState(false);

    useEffect(() => {
        fetchJoke();
    }, [])

    const fetchJoke = () => {
        setPunchlineClicked(false);
        fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart")
        .then(response => response.json())
        .then(data => setJoke({setup: data.setup, delivery: data.delivery}))
    }

    const displayPunchline = () => {
        setPunchlineClicked(true);
    }

    return (
        <>
            <h1>Hello from Joke Container</h1>
            <h2>{joke.setup}</h2>
            <button onClick={displayPunchline}>Display Punchline</button>
            {punchlineClicked ? <PunchlineComponent joke={joke} /> : null}
            <button onClick={fetchJoke}>Fetch Joke</button>
        </>
    )
}

export default JokeContainer;