import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from 'containers/home/home'
import Faq from 'containers/faq/faq'
import Header from "components/header/header";
import Footer from "components/footer/footer"
import ScrollToTop from "components/scrollToTop/scrollToTop"

import "./app.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Fragment>
        <Header />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/faq" component={Faq} />
            </Switch>
          </ScrollToTop>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
