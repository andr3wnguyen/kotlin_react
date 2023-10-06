import React from 'react';
import CheckBoxOptions from '../components/CheckBoxOptions';
import { createUserPreferences,pingServer } from '../apis/StarterClient';

class UserPage extends React.Component {


//https://stackoverflow.com/questions/70019647/how-to-handle-group-radio-button-in-react-js-functional-component
//https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
//https://stackoverflow.com/questions/39326300/why-we-cannot-pass-boolean-value-as-props-in-react-it-always-demands-string-to
handleButtonClick = async () => {
//get the values from the buttons and set the body for the req
const indoorBool = document.querySelector(
    'input[name="indoor"]:checked'
  ).value;

const groupBool = document.querySelector(
    'input[name="group"]:checked'
).value;

const body = {
    "indoor":indoorBool, "group":groupBool
}
        const response = await createUserPreferences(body);
        console.log(response)
}


    render() {
        return (
            <div>
                <h1>Things to do.</h1>
                <p>{this.props.text}</p>
                <CheckBoxOptions
                name='indoor'
                value1='Indoor'
                value2='Outdoor'
                label1='Indoor'
                label2='Outdoor'
                booleanInt1={true}
                booleanInt2={false}
                onValueChange={(value) => {
                    console.log('Selected value:', value);
                }}
                />
                <CheckBoxOptions
                name='group'
                value1='Alone'
                value2='Group'
                label1='Alone'
                label2='Group'
                boolean1={true}
                boolean2={false}
                onValueChange={(value) => {
                    console.log('Selected value:', value);
                }}
                />


                <button onClick={this.handleButtonClick}>Enter</button>
            </div>
        );
    }
}

export default UserPage;
