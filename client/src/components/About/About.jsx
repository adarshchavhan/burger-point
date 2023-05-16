import React from 'react'
import {RiFindReplaceLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className="about__page">
        <h1>About Us</h1>
      <main>
        <article>
          <h2>Great Food Comes First</h2>
          <p>
          Every day, more than 1k guests visit Burger Point restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food. Founded in 2020, Burger Point is the second largest fast food hamburger chain in the Butibori. The original Home of the Whopper, our commitment to premium ingredients, signature recipes, and family-friendly dining experiences is what has defined our brand for more than 2 successful years.
          </p>

          <p>
            To explore our burgers menu click below.
          </p>

          <Link to='/'>
            <RiFindReplaceLine />
          </Link>
        </article>
      </main>
    </div>
  )
}

export default About