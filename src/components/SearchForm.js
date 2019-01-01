import React, { Component } from 'react';

class SearchForm extends Component {

  state = {
    search: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6 push-s3 l4 push-l4">
              <input id="search"
                     name="search"
                     value={this.state.search}
                     placeholder="Search"
                     type="text"
                     className="validate"
                     onChange={this.handleChange} />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchForm;
