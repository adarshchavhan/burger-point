import React from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import {GiHamburger} from 'react-icons/gi'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="top">
                    <div className='text'>
                        <h2><GiHamburger/>BurgerPoint</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae perspiciatis quisquam libero ea beatae temporibus ipsa expedita nemo numquam.</p>
                    </div>
                    <div className="social">
                        <h4>Follow Us</h4>

                        <div>
                            <a href="/">
                                <AiFillLinkedin />
                            </a>
                            <a href="/">
                                <AiFillInstagram />
                            </a>
                            <a href="/">
                                <AiFillGithub />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copyrights">All rights are reserved by Adarsh</div>
            </div>
        </footer>
    )
}

export default Footer