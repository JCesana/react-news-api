import React, { Component } from 'react';
import ArticleList from '../components/article/ArticleList';
import { connect } from 'react-redux';
import { fetchSaves, deleteSave } from '../actions/articlesActions';
import axios from 'axios';

class SavesContainer extends Component {

  componentDidMount() {
    this.props.fetchSaves();
  }

  render() {
    console.log('SavesContainer redux props:', this.props);
    return (
      <div>
        <div className="center-align">
        <i className="material-icons favorite-icon">favorite_border</i>
        </div>
        <ArticleList articles={this.props.articles} deleteSave={this.props.deleteSave} isSaved={true} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles.saves
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchSaves: () => dispatch(fetchSaves()),
  deleteSave: id => dispatch(deleteSave(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SavesContainer);
