import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import Order from "./components/Order/Order";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/manage">
            <Order></Order>
          </Route>
          <Route path="*">
            <Link to="/">
              <button className="btn btn-primary  ">Back to home</button>
            </Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
