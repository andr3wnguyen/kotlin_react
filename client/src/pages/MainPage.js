import React from 'react';
import { Tab } from 'semantic-ui-react';
import PingPage from './ping-page/PingPage';
import UserPage from './UserPage';
import UserPageButtons from './UserPageButtons';

class MainPage extends React.Component {

    panes = [
        { menuItem: 'User Page With Buttons', render: () => <Tab.Pane><UserPageButtons text="Welcome User." /></Tab.Pane> },
        { menuItem: 'User Page', render: () => <Tab.Pane><UserPage text="Welcome User." /></Tab.Pane> },
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