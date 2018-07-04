import React, { Component } from 'react';
import Story from './Story';

class Stories extends Component {
  render() {
    return (
      <div>
        {this.props.stories.map((story, index) => {
          return (
            <Story
              key={index}
              source={story.source.name}
              title={story.title}
              description={story.description}
              date={story.publishedAt}
              url={story.url}
            />
          );
        })}
      </div>
    );
  }
}

export default Stories;
