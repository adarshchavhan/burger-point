import React from 'react'
import {RiMailAddFill, RiPhoneFill,} from 'react-icons/ri'
import {HiLocationMarker} from 'react-icons/hi'
import {Link} from 'react-router-dom'

const Contact = () => {

  const handleChange = () => {

  }

  return (
    <div className="contact__page">
      <h1>Contact Us</h1>
      <div className="container">
      <div className='left'>
        <h2>GET IN TOUCH</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus aliquam eius saepe cum dolore fugiat amet minima! Amet laboriosam molestias dolor illum omnis magnam soluta praesentium earum odit quia!</p>
        
        <div className="link__wrapper">
          <Link>
            <RiPhoneFill/>
          </Link>
          <Link>
            <RiMailAddFill/>
          </Link>
          <Link>
            <HiLocationMarker/>
          </Link>
        </div>
      </div>
        <form >
          <input type="text" name="name" placeholder='Name' onChange={handleChange} />
          <input type="email" name="email" placeholder='Email' onChange={handleChange} />
          <textarea rows={5} name="message" placeholder='Message..' onChange={handleChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact