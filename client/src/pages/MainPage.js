import React from 'react';
import { Tab } from 'semantic-ui-react';
import PingPage from './ping-page/PingPage';
import UserPageButtons from './GetEventsPage';
import HomepageLayout from './HomePage';
import AllEvents from './AllEventsPage';
import { Link } from 'react-router-dom'; // Import Link

class MainPage extends React.Component {

    panes = [
        { menuItem: 'User Page With Buttons', render: () => <Tab.Pane><UserPageButtons text="Welcome User." /></Tab.Pane> },
        { menuItem: 'All events', render: () => <Tab.Pane><AllEvents text="Welcome User." /></Tab.Pane> },
        { menuItem: 'Homepage', render: () => <Tab.Pane><HomepageLayout /></Tab.Pane> }, 
        { menuItem: 'Ping', render: () => <Tab.Pane><PingPage /></Tab.Pane> },
    ]

    render() {
        return (
            <div className="ui container">
                <h1 className="ui centered header">Starter project</h1>
                <div className="ui divider"></div>
                <Tab panes={this.panes} />
            </div >
        );
    }
}

export default MainPage;