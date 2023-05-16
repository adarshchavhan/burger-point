import React from 'react'
import heroImg from '../../assets/hero-burger.png'
import {GiHamburger} from 'react-icons/gi'

const Hero = () => {
  return (
    <section className="hero">
        <div className="container">
            <div className="left">
                <h1><GiHamburger/> Burger Point</h1>
                <h2>Starting burgers form <span>RS 99</span></h2>
                <a href='#menu'>Explore Menu</a>
            </div>
            <div className="right">
                <img loading='lazy' src={heroImg} />
            </div>
        </div>
    </section>
  )
}

export default Hero