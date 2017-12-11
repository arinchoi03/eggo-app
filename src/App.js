import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import './App.css';
import { fetchRepos } from './action-creators/repos';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: ''
      , key: ''
    }
  }

  onIdChange = (evt) => {
    this.setState({
      id: evt.target.value
    })
  }

  onKeyChange = (evt) => {
    this.setState({
      key: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.fetchUserRepos(this.state.id, this.state.key)
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Github ID</label>
          <input onChange={this.onIdChange}></input>
          <label>Github API</label>
          <input onChange={this.onKeyChange}></input>
          <button>
            <Link to={`/users/${this.state.id}/repos`}>Enter your EggoApp</Link>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = null
const mapDispatch = dispatch => ({
  fetchUserRepos: (userId, apiKey) => {
    dispatch(fetchRepos(userId, apiKey))
  }
})

export default connect(mapStateToProps, mapDispatch)(App)
