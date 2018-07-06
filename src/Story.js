import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';
import moment from 'moment';

class Story extends Component {
  render() {
    return (
      <div>
        {/* <Card body>
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
        </Card> */}
        <Card>
          <CardImg
            top
            width="100%"
            height="500px%"
            object-fit="cover"
            src={this.props.image}
            alt="Story image"
          />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.description}</CardText>
            <a href={this.props.url}>Read more</a>
            <CardText>
              <small className="text-muted">{this.props.source}</small>
              <span className="float-right text-muted">
                {moment(new Date(this.props.date)).format(
                  'MMMM Do YYYY, h:mm:ss a'
                )}
              </span>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Story;
