import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import Order from "./components/Order/Order";
import NotFound from "./components/NotFound/NotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";
import { AuthContextProvider, PrivateRoute } from "./components/Login/useAuth";
import Shipment from "./components/Ship/Shipment";

function App() {
  return (
    <div>
      <Router>
        <AuthContextProvider>
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
            <Route path="/product/:key">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
