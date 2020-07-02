import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from './components/Home/HomeContainer';
import {
  Global,
  Container } from './components/Styled';
import Theme from './components/Theme';
import HeaderCountainer from './components/Header/HeaderContainer';
import CountryContainer from './components/Country/CountryContainer';

function App() {
  return (
    <Router>
      <Global />
      <Theme>
        <HeaderCountainer />
        <Container>
          <Switch>
            <Route path="/" component={HomeContainer} exact />
            <Route path="/country/:alpha3Code" component={CountryContainer} exact />
          </Switch>
        </Container>
      </Theme>
    </Router>
  );
}

export default App;
