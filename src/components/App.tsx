import React from 'react';
import './App.css';
import {generateDurationByHalfHourWithLabels} from "../utility/sleepScoreCalculations";

function App() {
    const [durationInBed, setDurationInBed] = React.useState("");
    const dayByHalfHourOptions = generateDurationByHalfHourWithLabels();

    const onSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setDurationInBed(e.target.value);
    }

    const isFormDisabled = durationInBed === "";

    return (
        <div className="appContainer">
            <form>
                <div className="durationInput">
                    <label htmlFor="durationBed">Duration in bed</label>
                    <select name="durationBed" id="duration-bed" onChange={onSelect} value={durationInBed}>
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
