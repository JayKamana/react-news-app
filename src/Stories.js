import React, { Component } from 'react';
import Story from './Story';

class Stories extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Top Stories</h2>
        {this.props.stories.map((story, index) => {
          return <Story key={index} />;
        })}
      </div>
    );
  }
}

export default Stories;
