import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from './components/Home/HomeContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomeContainer} />
      </Switch>
    </Router>
  );
}

export default App;
