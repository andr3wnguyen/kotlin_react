import React from 'react';
import { Tab, Button } from 'semantic-ui-react';
import OptionButtons from '../components/OptionButtons';
import { getEvents } from '../apis/StarterClient';
import ItemExampleHeaders from '../components/Items';
import { Routes, Route, Outlet } from 'react-router-dom';


//calls the get method -> set the get in routing in server,  -> create api call -> call the api and get response -> make sure server is running
class AllEvents extends React.Component {

    state = { retreivedEvents: [] }


    getAllEvents = async () => {

        const response = await getEvents();
        const listOfEvents = response.data.map(item => ({
            id: item.id,
            title: item.title,
            description: item.description,
            image: item.image
        }));

        this.setState({ retreivedEvents: listOfEvents });

        console.log(listOfEvents)


    }


    render() {
        return (

            <div>
                <Button onClick={this.getAllEvents}>See all events</Button>
                {this.state.retreivedEvents.length > 0 ? (
                    this.state.retreivedEvents.map((event, index) => (
                        <ItemExampleHeaders
                            key={index}
                            image={event.image}
                            description={event.description}
                            title={event.title}
                        />
                    ))
                ) : (
                    <div>No events</div>
                )}
            </div>
        )
    }
}

export default AllEvents;