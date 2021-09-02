import React from 'react';
import './App.css';
import {generateDurationByHalfHourWithLabels} from "../utility/sleepScoreCalculations";

function App() {
    const [selectValue, setSelectValue] = React.useState("");
    const dayByHalfHourOptions = generateDurationByHalfHourWithLabels();

    const onSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectValue(e.target.value);
    }

    const isFormDisabled = selectValue === "";

    return (
        <div className="appContainer">
            <form>
                <div className="durationInput">
                    <label htmlFor="exampleSelect">example select</label>
                    <select name="exampleSelect" id="select-example" onChange={onSelect} value={selectValue}>
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
