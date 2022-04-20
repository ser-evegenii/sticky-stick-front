import React, { useState } from "react";

const options = [
    { label: "Lifestyle", value: "lifestyle" },
    { label: "Area", value: "area" },
    { label: "Random", value: "random" },
    { label: "Comedy", value: "comedy" },
    { label: "Entertainment", value: "entertainment" }
];

const ChannelCategory = props => {
    return (
        <div>
            {props.title}
            <ul>
                {props.options.map(option => (
                    <li key={props.key}>
                        <label>
                            {option.label}
                            <input
                                className={props.className}
                                name="test"
                                checked={option.value === props.checked}
                                onChange={() => props.onChange(option.value)}
                                type="radio"
                            />
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function TestFunction() {
    const [checked, setCheckBoxChecked] = useState(false);

    const onAddCategory = value => {
        setCheckBoxChecked(value);
    };

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <ChannelCategory
                key={"channel.key"}
                options={options}
                onChange={value => onAddCategory(value)}
                title="Add your chatroom to a category so that users can find it easily"
                checked={checked}
            />
        </div>
    );
}