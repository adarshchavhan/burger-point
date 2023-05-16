import React from 'react'
import {GiHamburger} from 'react-icons/gi'
import {Link} from 'react-router-dom'

const NoPage = () => {
  return (
    <div className="no__page">
        <main>
        <div>
            <GiHamburger/>
            <h1>404</h1>
            </div>
            <p>No Page Found. Click below to go home.</p>
            <Link to='/'>Go to Home</Link>
        </main>
    </div>
  )
}

export default NoPage