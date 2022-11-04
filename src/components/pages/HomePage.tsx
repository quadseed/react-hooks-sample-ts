import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>This is HomePage</h1>
      <p><Link to="/state">State</Link></p>
      <p><Link to="/effect">Effect</Link></p>
      <p><Link to="/context">Context</Link></p>
      <p><Link to="/ref">Ref</Link></p>
      <p><Link to="/reducer">Reducer</Link></p>
    </div>
  )
}

export default HomePage