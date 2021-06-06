// Multiple web page source:
// https://medium.com/@ipenywis/intro-to-react-router-for-beginners-multiple-page-apps-461f4729bd3f

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Pages
import MainPage from "./pages";
import AboutMePage from "./pages/AboutMe";
import NotFoundPage from "./pages/NotFound";
import MenuPage from "./pages/Menu";
import Projects from "./pages/Projects";
import Header from "./pages/Header";

const App = () => {
  return (
    <Router basename="/">
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/Menu" component={MenuPage} />
          <Route exact path="/AboutMe" component={AboutMePage} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/404Error" component={NotFoundPage} />
          <Redirect to="/404Error" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
