import React, { Component } from "react";

export default class Questions extends Component {
  state = {};

  componentWillMount() {
    this.getSurveysCollection();
  }

  // Fetching mechanism
  fetch = endpoint => {
    return window
      .fetch(endpoint)
      .then(res => res.json())
      .catch(error => console.log(error));
  };

  // Fetch Surveys from Backend
  getSurveysCollection = () => {
    this.fetch("/api/questions").then(surveys => {
      surveys ? this.setState({ surveys }) : this.setState({ surveys: [] });
    });
  };

  render() {
    return <div>TEst</div>;
  }
}
