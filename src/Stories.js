import React, { Component } from 'react';
import Story from './Story';

class Stories extends Component {
  render() {
    return (
      <div>
        {this.props.stories.map(story => {
          return (
            <Story
              key={story.id}
              source={story.source.name}
              title={story.title}
              description={story.description}
              image={story.urlToImage}
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
