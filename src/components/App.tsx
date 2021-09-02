import React from 'react';
import './App.css';
import {generateDurationByHalfHourWithLabels} from "../utility/sleepScoreCalculations";

function App() {
    const [durationInBed, setDurationInBed] = React.useState("");
    const [durationAsleep, setDurationAsleep] = React.useState("");

    const dayByHalfHourOptions = generateDurationByHalfHourWithLabels();

    const onDurationBedChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setDurationInBed(e.target.value);
    }

    const onDurationAsleepChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setDurationAsleep(e.target.value);
    }

    const isFormDisabled = durationInBed === "" || durationAsleep === "";

    return (
        <div className="appContainer">
            <form>
                <div className="durationInput">
                    <label htmlFor="durationBed">Duration in bed</label>
                    <select name="durationBed" id="duration-bed" onChange={onDurationBedChange} value={durationInBed}>
                        <option value="" disabled hidden>Select an option...</option>
                        {dayByHalfHourOptions.map((current, _i) => {
                            return <option value={current.value}
                          key={`${current.value}`}>{current.label}</option>
                        })}
                    </select>
                </div>

                <div className="durationInput">
                    <label htmlFor="durationAsleep">Duration asleep</label>
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
                    onClick={() => {
                        console.log("Clicked!!")
                    }}>
                    Calculate
                </button>
            </form>
        </div>
    );
}

export default App;
