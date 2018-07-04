import React, { Component } from 'react';

class CategoryItem extends Component {
  render() {
    return (
      <button
        type="button"
        className={
          this.props.active === this.props.category
            ? 'list-group-item list-group-item-action active'
            : 'list-group-item list-group-item-action'
        }
        onClick={() => {
          this.props.setActive(this.props.category);
          this.props.onClick(this.props.category);
        }}
      >
        {this.props.category}
      </button>
    );
  }
}

export default CategoryItem;
