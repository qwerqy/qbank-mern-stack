import React, { Component } from "react";
import { Loader, Container, Header } from "semantic-ui-react";
import SanitizedHTML from "react-sanitized-html";

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
        {surveys && surveys.length ? (
          Object.keys(surveys).map(key => {
            const survey = surveys[key];
            const questions = survey.questions;
            return (
              <div key={key}>
                {questions && questions.length ? (
                  Object.keys(questions).map(qkey => {
                    const answers = questions[qkey].answers;
                    return (
                      <div key={qkey}>
                        <Header>{questions[qkey].title}</Header>
                        <ul>
                          {answers && answers.length ? (
                            Object.keys(answers).map(akey => {
                              return (
                                <li key={akey}>
                                  <SanitizedHTML html={answers[akey].input} />
                                </li>
                              );
                            })
                          ) : (
                            <li>No premade answers.</li>
                          )}
                        </ul>
                      </div>
                    );
                  })
                ) : (
                  <p>Box goes here</p>
                )}
              </div>
            );
          })
        ) : (
          <Loader indeterminate>Getting the surveys for you..</Loader>
        )}
      </Container>
    );
  }
}
