import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from './components/Home/HomeContainer';
import {
  Global,
  Container } from './components/Styled';
import Theme from './components/Theme';
import Header from './components/Header/HeaderContainer';

function App() {
  return (
    <Router>
      <Global />
      <Theme>
        <Header />
        <Container>
          <Switch>
            <Route path="/" component={HomeContainer} exact />
            {/* <Route path="country/:alpha3Code" component={HomeContainer} exact /> */}
          </Switch>
        </Container>
      </Theme>
    </Router>
  );
}

export default App;
