import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

class CategoryList extends Component {
  state = {
    active: 'Top Stories'
  };

  setActive = category => {
    this.setState({ active: category });
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header text-center">Categories</div>
          <div className="list-group list-group-flush">
            {this.props.list.map((category, index) => {
              return (
                <CategoryItem
                  active={this.state.active}
                  setActive={this.setActive}
                  key={index}
                  category={category}
                  onClick={this.props.onClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryList;
