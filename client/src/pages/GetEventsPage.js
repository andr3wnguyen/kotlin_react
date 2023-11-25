import React from 'react';
import { Button } from 'semantic-ui-react';
import OptionButtons from '../components/OptionButtons';
import { createUserPreferences } from '../apis/StarterClient';
import Items from '../components/Items';

class GetEventsPage extends React.Component {

    state = {retreivedEvents:[], 
    Climate:"No Preference",
    Historical:"No Preference",
    Urban:"No Preference",
    Activities:"No Preference",
    Scenery:"No Preference",
    Budget:"No Preference",
    Vibe:"No Preference"}


    getEvents = async () => {
      const climate = this.state.Group
      const historical = this.state.Indoor
      const urban = this.state.Urban
      const activities = this.state.Activities
      const scenery = this.state.Scenery
      const budget = this.state.Budget
      const vibe = this.state.Vibe

      const body = {
        "climate":climate, 
        "historical":historical,
        "urban": urban,
        "activities": activities,
        "scenery": scenery,
        "budget": budget,
        "vibe": vibe
    }
      const response = await createUserPreferences(body);
      const listOfEvents = response.data.map(item => ({
        id: item.id,
        activity: item.activity,
        location: item.location,
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
        const { changePage } = this.props;
        return (
            <div className="ui container">
                <br/>
                <h1 className="ui centered header">Find an event</h1>
                <h1>Set your preferences</h1>
                <p>{this.props.text}</p>
                <OptionButtons
                name='Climate'
                value1='Hot'
                value2='No Preference'
                value3='Cold'
                onSelectionChange={this.onSelectionChange}
                />

                <OptionButtons
                name='Historical'
                value1='Modern'
                value2='No Preference'
                value3='Ancient'
                onSelectionChange={this.onSelectionChange}
                />

                <OptionButtons
                name='Urban'
                value1='City'
                value2='No Preference'
                value3='Rural'
                onSelectionChange={this.onSelectionChange}
                />

                <OptionButtons
                name='Activities'
                value1='Adventure'
                value2='No Preference'
                value3='Relaxation'
                onSelectionChange={this.onSelectionChange}
                />

                <OptionButtons
                name='Scenery'
                value1='Beaches'
                value2='No Preference'
                value3='Mountains'
                onSelectionChange={this.onSelectionChange}
                />      

                <OptionButtons
                name='Budget'
                value1='Budget-friendly'
                value2='No Preference'
                value3='Luxury'
                onSelectionChange={this.onSelectionChange}
                />      


                <OptionButtons
                name='Vibe'
                value1='Party'
                value2='No Preference'
                value3='Tranquility'
                onSelectionChange={this.onSelectionChange}
                />      

                <br></br>
                <Button onClick={this.getEvents}>Get Events</Button>
                <br></br>

                {this.state.retreivedEvents.length > 0 ? (
                this.state.retreivedEvents.map((event, index) => (
                <Items
                    key={index} 
                    image={event.image}
                    description={event.description}
                    title={event.title}
                    id={event.id}
                    changePage={changePage}
                />
                ))
            ):(
                <div></div>
            )}

            </div >
            


    )}
}

export default GetEventsPage;