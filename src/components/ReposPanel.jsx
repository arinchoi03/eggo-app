import React from 'react'
import { Link } from 'react-router'

const ReposPanel = (props) => {
  debugger
  return (
    <div>
      <h1>ReposPanel</h1>
      <ul>
        { props.repos && props.repos.map((repo) => {
          return(
            <li key={repo.id}>{repo.name}</li>
            )
        })
        }
      </ul>
    </div>
  )
}

export default ReposPanel
