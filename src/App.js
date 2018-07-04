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
const PARAM_SEARCH = 'category=';

class App extends Component {
  state = {
    searchTerm: '',
    categoryList: [
      'Top Stories',
      'Business',
      'Technology',
      'Sports',
      'Entertainment',
      'Health',
      'Science'
    ],
    stories: [],
    currentCategory: ''
  };

  onSearchChange = searchTerm => {
    this.setState({
      searchTerm
    });
  };

  onSearchSubmit = e => {
    e.preventDefault();
    axios(`${PATH_BASE}&${API_KEY}&q=${this.state.searchTerm}`).then(result =>
      this.setNewsStories(
        result.data.articles,
        "Stories including '" + this.state.searchTerm + "'"
      )
    );
  };

  onCategorySelect = searchTerm => {
    searchTerm = searchTerm === 'Top Stories' ? '' : searchTerm;
    this.fetchNewsStories(searchTerm);
  };

  fetchNewsStories = category => {
    axios(`${PATH_BASE}&${API_KEY}&${PARAM_SEARCH}${category}`).then(result =>
      this.setNewsStories(result.data.articles, category)
    );
  };

  setNewsStories = (stories, category) => {
    category = category === '' ? 'Top Stories' : category;

    this.setState({
      stories,
      category
    });
  };

  componentDidMount = () => {
    this.fetchNewsStories(DEFAULT_QUERY);
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
            <CategoryList
              list={this.state.categoryList}
              onClick={this.onCategorySelect}
            />
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
