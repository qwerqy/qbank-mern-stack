import React, { Component } from "react";
import { Loader, Container } from "semantic-ui-react";

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
    const { surveys } = this.state;
    return (
      <Container>
        <ul>
          {surveys && surveys.length ? (
            Object.keys(surveys).map(key => {
              return <li key={surveys[key]._id}>{surveys[key].name}</li>;
            })
          ) : (
            <Loader indeterminate>Getting the surveys for you..</Loader>
          )}
        </ul>
      </Container>
    );
  }
}
