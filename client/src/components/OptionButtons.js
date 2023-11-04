import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';


const OptionButtons = (props) => {
    const [selectedButton, setSelectedButton] = useState('No Preference');

    const onClick = (e, data) => {
        const value = e.target.value;
        const name = props.name
        setSelectedButton(value);
        props.onSelectionChange(name, value);
    }

    const renderButton = (name, value) => {
        return (
            <Button
                active={selectedButton === value}
                onClick={onClick}
                value={value}
                name={name}>
                {value}
            </Button>
        );
    };

    return (
        <div>
            <Button.Group>
                {renderButton(props.name, props.value1)}
                <Button.Or />
                {renderButton(props.name, props.value2)}
                <Button.Or />
                {renderButton(props.name, props.value3)}
            </Button.Group>
            <pre>Selected Button: {selectedButton}</pre>
        </div>
    );
};
export default OptionButtons;

//https://react.semantic-ui.com/elements/button/#content-multiple-conditionals