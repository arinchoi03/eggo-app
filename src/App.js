import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import './App.css';
import { setUser } from './action-creators/user';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: ''
      , key: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
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
    this.props.setUserInfo(this.state.id, this.state.key)
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Github ID</label>
          <input onChange={this.onIdChange}></input>
          <label>Github API</label>
          <input onChange={this.onKeyChange}></input>
          <button type="submit">
            Enter your EggoApp
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = null
const mapDispatch = dispatch => ({
  setUserInfo: (userId, apiKey) => {
    dispatch(setUser(userId, apiKey))
    browserHistory.push(`/users/${userId}/repos`)
  }
})

export default connect(mapStateToProps, mapDispatch)(App)
