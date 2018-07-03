import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h2>Categories</h2>
        <ListGroup>
          {this.props.list.map((category, index) => {
            return (
              <ListGroupItem key={index} tag="button" action>
                {category}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default CategoryList;
