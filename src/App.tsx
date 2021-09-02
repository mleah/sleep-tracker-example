import React from 'react';
import './App.css';

function App() {
    const [selectValue, setSelectValue] = React.useState("");


    const onSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectValue(e.target.value);
    }

    return (
        <div className="appContainer">
            <div>HELLO WORLD!!</div>
            <label htmlFor="exampleSelect">example select</label>
            <select name="exampleSelect" id="select-example" onChange={onSelect} value={selectValue}>
                <option value="" disabled hidden>Select an option...</option>
                <option value={1}>Value 1</option>
                <option value={2}>Value 2</option>
                <option value={3}>Value 3</option>
            </select>
        </div>
    );
}

export default App;
