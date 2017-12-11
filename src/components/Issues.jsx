// import React, { Component } from 'react';
import { connect } from 'react-redux';
import IssuesPanel from '../components/IssuesPanel'
import { fetchIssues } from '../action-creators/issues'

const mapStateToProps = ({issues}) => ({ issues })

const mapDispatchToProps = (dispatch) => {
  return {
    getIssues(repo) {
      dispatch(fetchIssues(repo))
    }
  }
}

const Issues = connect(
  mapStateToProps, mapDispatchToProps
  )(IssuesPanel);

export default Issues;

