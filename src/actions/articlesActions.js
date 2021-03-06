import axios from 'axios';
import dummyData from '../reducers/dummyData'


export function fetchNews() {

  // for development only
  // const articles = { data: { articles: dummyData.articles }}
  // return (dispatch) => {
  //   dispatch({ type: 'FETCH_NEWS', articles })
  // }

  // uncomment when project is complete:
  return (dispatch) => {
    dispatch({ type: 'LOADING_NEWS' });
    axios.get(process.env.REACT_APP_API_URL, {
      params: {
        country: process.env.REACT_APP_API_COUNTRY,
        category: process.env.REACT_APP_API_CATEGORY,
        apiKey: process.env.REACT_APP_API_KEY
      }
    })
    .then(articles => dispatch({ type: 'FETCH_NEWS', articles }));
  }
}

export function fetchSearch(query) {

  // for development only
  // const articles = { data: { articles: dummyData.dummySearch }};
  // const searchQuery = query;
  // return (dispatch) => {
  //   dispatch({ type: 'FETCH_SEARCH', articles, searchQuery })
  // }

  // uncomment when project complete:
  return (dispatch) => {
    dispatch({ type: 'LOADING_SEARCH' });
    axios.get(process.env.REACT_APP_API_URL, {
      params: {
        country: process.env.REACT_APP_API_COUNTRY,
        category: process.env.REACT_APP_API_CATEGORY,
        q: query,
        apiKey: process.env.REACT_APP_API_KEY
      }
    })
    .then(articles => dispatch({ type: 'FETCH_SEARCH', articles: articles, searchQuery: query }));
  }
}

export function fetchSaves() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SAVES' });
    axios.get('/api/v1/saves')
      .then(saves => dispatch({ type: 'FETCH_SAVES', saves }))
  }
}

export function addSave(save) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SAVE' });
    axios.post('/api/v1/saves', {
      source: save.source.name,
    	author: save.author,
    	title: save.title,
    	description: save.description,
    	url: save.url,
    	urlToImage: save.urlToImage,
    	publishedAt: save.publishedAt
    })
    .then(save => dispatch({ type: 'ADD_SAVE', save }))
  }
}

export function deleteSave(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SAVE' });
    axios.delete(`/api/v1/saves/${id}`)
      .then(save => dispatch({ type: 'DELETE_SAVE', save }))
  }
}
