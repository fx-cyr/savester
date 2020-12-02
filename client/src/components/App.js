import React from "react";
import Header from "./Header";
import { GlobalStyles } from "../styles/GlobalStyles";
import { colorSet } from "../styles/Colors";
import styled from "styled-components";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Transactions from "./Transactions";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <AppContainer>
          <Route exact path="/">
            <Redirect to="/" />
          </Route>
          <Route path="/transactions">
            <div>
              <Transactions />
            </div>
          </Route>
        </AppContainer>
      </Switch>
    </Router>
  );
}

const AppContainer = styled.div``;

export default App;