import React from 'react';
import MainPage from './pages/MainPage';
import AllEvents from './pages/AllEventsPage';
import HomepageLayout from './pages/HomePage';
import GetEventsPage from './pages/GetEventsPage';
import EventInfo from './pages/EventInfo';
import TopHeader from './components/TopHeader';

class App extends React.Component {

  state = { currentPage: "homePage", eventId: null }

  changePage = (newPage, id) => {
    if (newPage === "eventInfo") {
      this.setState({ currentPage: newPage, eventId: id });
    } else {
      this.setState({ currentPage: newPage });
    }
  }


  renderPage() {
    const { currentPage } = this.state;
    
    //switch cases for page changes - buttons can call this via anon function and page rendering, passed the changePage to the rendered pages as a prop to be used. 
    switch (currentPage) {
        case 'mainPage':
            return <MainPage changePage={this.changePage}/>;
        case 'allEvents':
            return <AllEvents changePage={this.changePage}/>;
        case 'homePage':
            return <HomepageLayout changePage={this.changePage}/>;
        case 'getEventsPage':
            return <GetEventsPage changePage={this.changePage}/>;
                    case 'getEventsPage':
            return <GetEventsPage changePage={this.changePage}/>;
            case 'eventInfo':
              return <EventInfo changePage={this.changePage} eventId={this.state.eventId} />;
        default:
            return <HomepageLayout changePage={this.changePage}/>;
    }
}

render() {
  const { currentPage } = this.state;
  return (
      <div className="ui container">
        {currentPage !== 'homePage' ?  <TopHeader changePage={this.changePage}/>: null}
          {this.renderPage()}
      </div>
  );
}
}


//routeymcrouteface https://www.w3schools.com/react/react_router.asp

export default App;