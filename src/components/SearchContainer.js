import React, { Component } from "react";
import {
  Form,
  Modal,
  Button,
  Grid,
  Container,
  Search
} from "semantic-ui-react";

import "../css/SearchContainer.css";

class SearchContainer extends Component {
  render() {
    return (
      <div className="searchbarContainer">
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={3} textAlign="center">
                <Modal dimmer="blurring" trigger={<Button>Add QSF</Button>}>
                  <Modal.Header>Upload QSF File.</Modal.Header>
                  <Modal.Content>
                    <Form
                      as="form"
                      action="/api/questions"
                      method="POST"
                      encType="multipart/form-data"
                    >
                      <Form.Field>
                        <label>Upload QSF file</label>
                        <input type="file" name="qsf" />
                      </Form.Field>
                      <Button type="submit">Upload</Button>
                    </Form>
                  </Modal.Content>
                </Modal>
              </Grid.Column>
              <Grid.Column width={13} textAlign="center">
                <Search fluid />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default SearchContainer;
