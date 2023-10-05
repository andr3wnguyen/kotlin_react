import React from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import CheckBoxOptions from '../components/CheckBoxOptions';


class UserPage extends React.Component {

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


                <button onClick={this.props.onButtonClick}>Enter</button>
            </div>
        );
    }
}

export default UserPage;
