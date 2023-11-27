import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { getEvents } from '../apis/StarterClient';
import EventCard from '../components/EventCards';

import CardExampleColored from '../components/AllEventsImages';



//calls the get method -> set the get in routing in server,  -> create api call -> call the api and get response -> make sure server is running
class AllEvents extends React.Component {

    state = { retreivedEvents: [] }

    componentDidMount() {
      this.getAllEvents();
    }


    getAllEvents = async () => {

        const response = await getEvents();
        const listOfEvents = response.data.map(item => ({
            id: item.id,
            activity: item.activity,
            location: item.location,
            image: item.image
        }));

        this.setState({ retreivedEvents: listOfEvents });

        console.log(listOfEvents)


    }


    render() {
      const { changePage } = this.props;
      const { retreivedEvents } = this.state;
  
      return (
        <div style={{ marginTop: '40px' }}>
          <Grid columns={4}>
            {retreivedEvents.map((event, index) => (
              <Grid.Column key={index} style={{ padding: '1rem' }}>
                <CardExampleColored
                  image={event.image}
                  activity={event.activity}
                  location={event.location}
                  id={event.id}
                  changePage={changePage}
                />
              </Grid.Column>
            ))}
          </Grid>
        </div>
      );
    }
  }
  
      

export default AllEvents;

//https://react.semantic-ui.com/views/card/#content-image-card
//https://react.semantic-ui.com/views/card/#variations-column-count