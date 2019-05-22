import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MoviesContainer from "./MoviesContainer";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/common/NotFound";
import NavBar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="container">
          <Switch>
            <Route path="/customers/" component={Customers} />
            <Route path="/rentals/" component={Rentals} />
            <Route path="/not-found/" component={NotFound} />
            <Route path="/movies/:id" component={MovieDetails} />
            <Route path="/movies" component={MoviesContainer} />
            <Redirect from="/" to="/movies" />
            <Redirect to="/not-found/" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
