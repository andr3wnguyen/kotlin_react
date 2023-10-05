import React from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import CheckBoxOptions from '../components/CheckBoxOptions';
import { createUserPreferences,pingServer } from '../apis/StarterClient';
//import axios from 'axios';


class UserPage extends React.Component {


//https://stackabuse.com/post-http-request-in-react/
handleButtonClick = async () => {
const dataToSend = {
  indoor: false, group: false
};
//        const body = { message: 'Hello, server!', number: 1 };
//
//        const response = await pingServer(body);
//        console.log(response)
        const response = await createUserPreferences(dataToSend);
        console.log(response)

//axios.post('/preference', dataToSend)
//  .then((response) => {
//    console.log(response.data);
//      // Handle data
//  })
//  .catch((error) => {
//    console.log(error);
//  })
}

    render() {
        return (
            <div>
                <h1>Things to do.</h1>
                <p>{this.props.text}</p>
                <CheckBoxOptions
                //get the value from this checkbox - probably something like name of the component -> .value
                name='checkboxRadioGroup'
                value1='Indoor'
                value2='Outdoor'
                label1='Indoor'
                label2='Outdoor'
                boolean1='true'
                boolean2='false'
                />
                <CheckBoxOptions
                name='checkboxRadioGroup'
                value1='Alone'
                value2='Group'
                label1='Alone'
                label2='Group'
                boolean1='true'
                boolean2='false'
                />


                <button onClick={this.handleButtonClick}>Enter</button>
            </div>
        );
    }
}

export default UserPage;
