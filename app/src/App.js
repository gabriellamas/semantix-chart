import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Nav from './Components/Nav'
import PageOne from './Pages/PageOne'
import PageTwo from './Pages/PageTwo'

const App = () => {
  return (
    <Router>
      <div className='flex-area'>
        <Nav/>
        <div className="page-container">
          <Switch>
              <Route exact path="/">
                <PageOne/>
              </Route>
              <Route path="/page-two">
                <PageTwo/>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
