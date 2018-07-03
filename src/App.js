import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import CategoryList from './CategoryList';
import Stories from './Stories';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

const API_KEY = `apikey=${process.env.REACT_APP_API_KEY}`;
const PATH_BASE = 'https://newsapi.org/v2/top-headlines?country=us';
const DEFAULT_QUERY = '';
const PARAM_SEARCH = 'q=';

class App extends Component {
  state = {
    searchTerm: '',
    categoryList: [
      'Top Stories',
      'General',
      'Business',
      'Technology',
      'Sports',
      'Entertainment',
      'Health',
      'Science',
      'Politics'
    ],
    stories: ['one', 'two', 'three']
  };

  onSearchChange = searchTerm => {
    this.setState({
      searchTerm
    });
  };

  onSearchSubmit = e => {
    e.preventDefault();
    console.log('hello');
    this.fetchNewsStories();
  };

  fetchNewsStories = () => {
    axios(`${PATH_BASE}&${API_KEY}&${PARAM_SEARCH}${DEFAULT_QUERY}`).then(
      result => console.log(result.data)
    );
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 4, offset: 4 }}>
            <SearchBar
              value={this.state.searchTerm}
              onChange={this.onSearchChange}
              onSubmit={this.onSearchSubmit}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="3">
            <CategoryList list={this.state.categoryList} />
          </Col>
          <Col md="9">
            <Stories stories={this.state.stories} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
