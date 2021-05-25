import React, { Component } from "react";

// Multiple web page source:
// https://medium.com/@ipenywis/intro-to-react-router-for-beginners-multiple-page-apps-461f4729bd3f

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

//Pages
import MainPage from "./pages";
import AboutMePage from "./pages/AboutMe";
import ContactInfoPage from "./pages/ContactInfo";
import NotFoundPage from "./pages/NotFound";
import MenuPage from "./pages/Menu";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/AboutMe" component={AboutMePage} />
          <Route exact path="/ContactInfo" component={ContactInfoPage} />
          <Route exact path="/Menu" component={MenuPage} />
          <Route exact path="/404Error" component={NotFoundPage} />
          <Redirect to="/404Error" />
        </Switch>
      </Router>
    );
  }
}

export default App;
