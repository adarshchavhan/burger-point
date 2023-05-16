import React from 'react'
import {GiHamburger} from 'react-icons/gi'

const Loader = () => {
  return (
    <div className="loader__page">
        <GiHamburger/>
        <div className="spinner"></div>
        <p>loading..</p>
    </div>
  )
}

export default Loader