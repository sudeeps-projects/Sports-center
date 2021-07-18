import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import LeftRight from "./components/LeftRight";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [active, setActive] = React.useState(false);
  const appRef = React.useRef(null);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header active={active} set={setActive} />
          <Banner />
          <LeftRight />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
