import React, { Component } from 'react';
// import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => this.props.onSubmit(e)}>
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Keywords"
              value={this.props.value}
              onChange={e => this.props.onChange(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
