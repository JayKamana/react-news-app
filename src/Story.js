import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import moment from 'moment';

class Story extends Component {
  render() {
    return (
      <div>
        <Card body>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>{this.props.description}</CardText>
          <a href={this.props.url}>Read more</a>
          <blockquote className="blockquote mt-3">
            <footer className="blockquote-footer">
              <span>{this.props.source}</span>
              <span className="float-right">
                {moment(new Date(this.props.date)).format(
                  'MMMM Do YYYY, h:mm:ss a'
                )}
              </span>
            </footer>
          </blockquote>
        </Card>
      </div>
    );
  }
}

export default Story;
