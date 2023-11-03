import React from 'react';
import { Button } from 'semantic-ui-react';
import { getEventInfo, getEvents } from '../apis/StarterClient';
import EventInfoCard from '../components/EventInfoCard';
import TopHeader from '../components/TopHeader';


//calls the get method -> set the get in routing in server,  -> create api call -> call the api and get response -> make sure server is running
class EventInfo extends React.Component {

    state = { retreivedEvent: {} }

    componentDidMount() {
        this.getEventInfo(this.props.eventId);
      }
  

    getEventInfo = async (eventId) => {

        console.log(eventId)
        const response = await getEventInfo(eventId);
        const event = response.data

        this.setState({ retreivedEvent: event});

        console.log(response)
        console.log(this.state.retreivedEvent)


    }


    render() {
        const { changePage } = this.props;
        return (
            

            <div>
                {this.state.retreivedEvent.title ? ( // Check if 'title' property exists before rendering
                    <div 
                    style={{   display: 'flex',          // Use flexbox for centering
                    justifyContent: 'center',  // Center horizontally  
                    height: '10vh' }}>
                        <EventInfoCard
                        image={this.state.retreivedEvent.image}
                        description={this.state.retreivedEvent.description}
                        title={this.state.retreivedEvent.title}
                        longdescription={this.state.retreivedEvent.longdescription}  
                        />
                        {/* <h1>{this.state.retreivedEvent.title}</h1>
                        <p>{this.state.retreivedEvent.description}</p> */}
                    </div>
                ) : (
                    <div>No event details available</div>
                )}
                
            </div>
            
        );
    }
}


export default EventInfo;