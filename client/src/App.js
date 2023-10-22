import React from 'react';
import MainPage from './pages/MainPage';
import AllEvents from './pages/AllEventsPage';
import HomepageLayout from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetEventsPage from './pages/GetEventsPage';

class App extends React.Component {

    render() {
        return (
            <div className="ui container">

                <BrowserRouter>
                <Routes>
                  <Route path="/" element={<MainPage />}>
                  <Route path="allevents" element={<AllEvents />} />
                    <Route index element={<MainPage/>} />
                    <Route path="userpreference" element={<GetEventsPage />} />
                    <Route path="home" element={<HomepageLayout />} />
                  </Route>
                </Routes>
              </BrowserRouter>
              </div>
        );
    }
}

//routeymcrouteface https://www.w3schools.com/react/react_router.asp

export default App;