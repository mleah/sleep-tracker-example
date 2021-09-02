import React, {useEffect, useState} from 'react';
import './App.css';
import {calculateSleepScore, generateDurationByHalfHourWithLabels} from "../utility/sleepScoreCalculations";
import Select from "./Select";
import {Duration} from "../models/Duration";

function App() {
    // State
    const [durationInBed, setDurationInBed] = useState("");
    const [durationAsleep, setDurationAsleep] = useState("");
    const [displayText, setDisplayText] = useState("");

    //
    // Quick check that the test server is working with the FE
    useEffect(() => {
        fetch("/test", {method: "get"})
            .then((res) => {
                if (!res.ok) {
                    console.log("API error");
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }, []);


    const dayByHalfHourOptions: Duration[] = generateDurationByHalfHourWithLabels();
    const isFormDisabled = durationInBed === "" || durationAsleep === "";

    //
    // onChange callbacks
    const onDurationBedChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setDurationInBed(e.target.value);
    }

    const onDurationAsleepChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setDurationAsleep(e.target.value);
    }

    //
    // API call for saving score
    const saveScore = (sleepScore: number): void => {
        fetch("/sleepscore",
            {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({score: sleepScore})
            })
            .then((res) => {
                if (!res.ok) {
                    setDisplayText("Error occurred - please try again");
                    throw Error(res.statusText);
                }
                return res.json();
            })
            .then((_data) => {
                setDisplayText(sleepScore.toString());
            })
            .catch((err) => {
                console.log(err);
                setDisplayText("Error occurred - please try again");
            })
    }

    //
    // onClick callback
    const onCalculateClick = (): void => {

        //Note:  Tested this loading text via toggling the network to slow down in my browser dev tools
        setDisplayText("Loading...");
        const sleepScore = calculateSleepScore(durationAsleep, durationInBed);
        saveScore(sleepScore);
    }

    return (
        <div className="appContainer">
            <form>
                <Select options={dayByHalfHourOptions}
                        onChange={onDurationBedChange}
                        label="Duration in bed"
                        name="bed"
                        value={durationInBed}
                />
                <Select options={dayByHalfHourOptions}
                        onChange={onDurationAsleepChange}
                        label="Duration asleep"
                        name="asleep"
                        value={durationAsleep}
                />
                <button
                    type="button"
                    id="calculate-score-button"
                    disabled={isFormDisabled}
                    onClick={onCalculateClick}>
                    Calculate
                </button>
            </form>

            <div>{displayText}</div>
        </div>
    );
}

export default App;
