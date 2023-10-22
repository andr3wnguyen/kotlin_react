import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { getEvents } from '../apis/StarterClient';
import ItemExampleHeaders from '../components/Items';
import { Routes, Route, Outlet } from 'react-router-dom';
import EventCard from '../components/EventCards';



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
            {/* might need to play with this ui but put in a grid for now */}
            <div style={{ marginTop: '40px' }}>
              <Grid columns={3} doubling stackable>
                {this.state.retreivedEvents.map((event, index) => (
                  <Grid.Column key={index}>
                    <EventCard
                      image={event.image}
                      description={event.description}
                      title={event.title}
                    />
                  </Grid.Column>
                ))}
              </Grid>
            </div>
          </div>
        );
      }
    }
      

export default AllEvents;

//https://react.semantic-ui.com/views/card/#content-image-card
//https://react.semantic-ui.com/views/card/#variations-column-count