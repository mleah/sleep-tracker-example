import React from "react";
import {Duration} from "../models/Duration";
import './Select.css';


interface SelectProps {
    options: Duration[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    name: string;
    label: string;
    value: string;
}

function Select(props: SelectProps) {
    const { options, onChange, name, label, value } = props;

    return (
        <div className="selectInput">

            <label htmlFor={`duration-${name}`}>{label}</label>
            <select
                name={name}
                required
                onChange={onChange}
                value={value}
                id={`duration-${name}`}
            >
                <option value="" disabled hidden>Select an option...</option>
                {options.map((current, _i) => {
                    return <option value={current.value}
                                   key={`${current.value}-${name}`}>{current.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;