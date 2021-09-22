import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Home } from './modules/home/Home';
import { OrdersList } from './modules/ordersList/OrdersList';
import RestaurantsList from './modules/restaurantsList/RestaurantsList';
import Login from './modules/login/Login';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';


function App(props) {

  const {
    userInfo,
    menus
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
            {userInfo == null &&
              <Login/>
            }
            {userInfo != null &&
            <Redirect
              to={{
                pathname: '/home'
              }}
            />
            }
          </Route>
          <Route path="/home">
            <RestaurantsList />
          </Route>
        <Route path="/ordersList">
            <OrdersList/>
        </Route>
      </Switch>
    </Router>

    );
}


export default connect(
  store => ({
      userInfo: store.login.userInfo,
      menus: store.restaurantsList.menus,
  }),
  null
)(App);
