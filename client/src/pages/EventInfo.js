import React from 'react';
import { Tab, Button } from 'semantic-ui-react';
import { getEventInfo, getEvents } from '../apis/StarterClient';
import ItemExampleHeaders from '../components/Items';
import { Routes, Route, Outlet } from 'react-router-dom';


//calls the get method -> set the get in routing in server,  -> create api call -> call the api and get response -> make sure server is running
class EventInfo extends React.Component {

    state = { retreivedEvent: {} }


    getEventInfo = async (eventId) => {

        const response = await getEventInfo(eventId);
        const event = response.data

        this.setState({ retreivedEvent: event});

        console.log(response)
        console.log(this.state.retreivedEvent)


    }


    render() {
        return (

            <div>
                <Button onClick={() =>{this.getEventInfo(1)}}>See all events</Button>
                {this.state.retreivedEvent.title ? ( // Check if 'title' property exists before rendering
                    <div>
                        <h1>{this.state.retreivedEvent.title}</h1>
                        <p>{this.state.retreivedEvent.description}</p>
                    </div>
                ) : (
                    <div>No event details available</div>
                )}
            </div>
        );
    }
}


export default EventInfo;