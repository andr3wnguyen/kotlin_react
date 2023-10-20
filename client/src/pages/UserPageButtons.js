import React from 'react';
import { Tab, Button } from 'semantic-ui-react';
import OptionButtons from '../components/OptionButtons';
import { createUserPreferences } from '../apis/StarterClient';
import ItemExampleHeaders from '../components/Items';
import { Routes, Route, Outlet } from 'react-router-dom';

class UserPageButtons extends React.Component {

    state = {retreivedEvents:[], 
    Group:"No Preference",
    Indoor:"No Preference"}


    getEvents = async () => {
      const group = this.state.Group
      const indoor = this.state.Indoor

      const body = {
        "indoor":indoor, "group":group
    }
      const response = await createUserPreferences(body);
      const listOfEvents = response.data.map(item => ({
        id: item.id,
        title: item.title,
        description: item.description,
        image: item.image
      }));
      
      this.setState({ retreivedEvents: listOfEvents });
    
            console.log(listOfEvents)
            console.log(body)
            console.log(this.state.retreivedEvents)
            
    }

        onSelectionChange = (name, selection) => {
            const userSelection = selection === 'No Preference' ? 'No Preference' : selection.toLowerCase();
        this.setState({[name]: userSelection}); 
    };
    
    render() {
        return (
            <div className="ui container">
                <h1 className="ui centered header">Starter project</h1>
                <h1>Things to do.</h1>
                <p>{this.props.text}</p>

                <OptionButtons
                name='Group'
                value1='Alone'
                value2='No Preference'
                value3='Group'
                onSelectionChange={this.onSelectionChange}
                />
                <br></br>

                <OptionButtons
                name='Indoor'
                value1='Indoor'
                value2='No Preference'
                value3='Outdoor'
                onSelectionChange={this.onSelectionChange}
                />





                <br></br>
                <Button onClick={this.getEvents}>Get Events</Button>
                <br></br>

                {/* {this.state.retreivedEvents.map((event, index) => (
                    <div key={index}>{event}</div>
                ))} */}


                {this.state.retreivedEvents.length > 0 ? (
                this.state.retreivedEvents.map((event, index) => (
                <ItemExampleHeaders
                    key={index} 
                    image={event.image}
                    description={event.description}
                    title={event.title}
                />
                ))
            ):(
                <p>Nothing to do</p>
            )}


            </div >
            


    )}
}

export default UserPageButtons;