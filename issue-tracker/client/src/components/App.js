import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from "../history";
import TrackerList from "./trackers/TrackerList";
import { PrivateRoute } from "./PrivateRoute";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <PrivateRoute path="/" exact component={TrackerList} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/register" exact component={RegisterPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
