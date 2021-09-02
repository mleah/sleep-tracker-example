import React, {useState} from 'react';
import './App.css';
import {generateDurationByHalfHourWithLabels} from "../utility/sleepScoreCalculations";

function App() {
    const [durationInBed, setDurationInBed] = useState("");
    const [durationAsleep, setDurationAsleep] = useState("");
    const [displayText, setDisplayText] = useState("");

    const dayByHalfHourOptions = generateDurationByHalfHourWithLabels();

    const onDurationBedChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setDurationInBed(e.target.value);
    }

    const onDurationAsleepChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setDurationAsleep(e.target.value);
    }

    const onCalculateClick = (): void => {
        setDisplayText("clicked");
    }

    const isFormDisabled = durationInBed === "" || durationAsleep === "";

    return (
        <div className="appContainer">
            <form>
                <div className="durationInput">
                    <label htmlFor="duration-bed">Duration in bed</label>
                    <select name="durationBed" id="duration-bed" onChange={onDurationBedChange} value={durationInBed}>
                        <option value="" disabled hidden>Select an option...</option>
                        {dayByHalfHourOptions.map((current, _i) => {
                            return <option value={current.value}
                          key={`${current.value}`}>{current.label}</option>
                        })}
                    </select>
                </div>

                <div className="durationInput">
                    <label htmlFor="duration-asleep">Duration asleep</label>
                    <select name="durationAsleep" id="duration-asleep" onChange={onDurationAsleepChange} value={durationAsleep}>
                        <option value="" disabled hidden>Select an option...</option>
                        {dayByHalfHourOptions.map((current, _i) => {
                            return <option value={current.value}
                                           key={`${current.value}`}>{current.label}</option>
                        })}
                    </select>
                </div>

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
