import React from "react";
import { Component } from "react";
// import {moduleName} from 'react-router-dom'

export default class MovieDetails extends Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1>Movie : {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}
