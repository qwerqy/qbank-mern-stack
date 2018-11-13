import React, { Component } from "react";
import { Container, Segment, Header } from "semantic-ui-react";

// import "../css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <Segment style={{ backgroundColor: "rgb(75, 173, 0)" }}>
        <Container>
          <Header inverted textAlign="center">
            Qbank
          </Header>
        </Container>
      </Segment>
    );
  }
}

export default Navbar;
