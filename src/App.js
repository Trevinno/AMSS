import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MoviesContainer from "./MoviesContainer";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/common/NotFound";
import NavBar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";
import LoginForm from "./components/LoginForm.jsx";
import SignUpForm from './components/SignUp';
import SignInForm from './components/SignIn';
import Homepage from './components/Homepage'; 
import Term from './components/Terms';
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import editProfile from './components/UserMainForm';
import Feed from './components/Feed';
import Jaime from './components/Jaime';

import './App.css'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main"style={{
          backgroundColor: '#66DAC7'
      }}>
          <Switch>
            <Route path="/customers/" component={Customers} />
            <Route path="/login/" component={LoginForm} />
            <Route path="/rentals/" component={Rentals} />
            <Route path="/not-found/" component={NotFound} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/term" component={Term} />
            <Route path="/movies" component={MoviesContainer} />
            <Route path="/homepage" component={Homepage} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/signin" component={SignInForm} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/profile" component={Profile} />
            <Route path="/feed" component={Feed} />
            <Route path="/editprofile" component={editProfile}/>
            <Route path="/jaime" component={Jaime} />
            <Redirect from="/" to="/Homepage" />
            <Redirect to="/not-found/" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
