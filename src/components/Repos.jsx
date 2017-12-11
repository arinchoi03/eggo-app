// import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReposPanel from '../components/ReposPanel'
import { selectRepo } from '../action-creators/repo'

const mapStateToProps = ({repos}) => ({ repos })

const mapDispatchToProps = (dispatch) => {
  return {
    selectRepos(repo) {
      dispatch(selectRepo(repo))
    }
  }
}

const Repos = connect(
  mapStateToProps, mapDispatchToProps
  )(ReposPanel);

export default Repos;
