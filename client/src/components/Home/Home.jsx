import React from 'react'
import Hero from './Hero'
import Founder from './Founder'
import Menu from './Menu'

const Home = () => {
  return (
    <div className="home__page">
      <Hero/>
      <Founder/>
      <div id="menu">
      <Menu/>
      </div>
    </div>
  )
}

export default Home