import React from 'react';
import CheckBoxOptions from '../components/CheckBoxOptions';
import { createUserPreferences,pingServer } from '../apis/StarterClient';
import Revealer from '../components/Revealer';

class UserPage extends React.Component {

    state = {retreivedEvents:""}


getEvents = async () => {
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
        this.setState({retreivedEvents:response.data})
        //get this to trigger the revealer
        console.log(response.data.title)
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
                
                <Revealer text={this.state.retreivedEvents.title} getTextMethod={this.getEvents}/>
            </div>
        );
    }
}

export default UserPage;

//random resources
//https://medium.com/@babux1/how-to-pass-state-data-from-one-component-to-another-in-react-js-9b4850887163#:~:text=There%20are%20several%20ways%20to,depending%20on%20your%20use%20case.%E2%80%9D
//https://stackoverflow.com/questions/70019647/how-to-handle-group-radio-button-in-react-js-functional-component
//https://www.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
//https://stackoverflow.com/questions/39326300/why-we-cannot-pass-boolean-value-as-props-in-react-it-always-demands-string-to