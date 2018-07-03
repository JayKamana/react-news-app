import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Story extends Component {
  render() {
    return (
      <div>
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Button</Button>
        </Card>
      </div>
    );
  }
}

export default Story;
