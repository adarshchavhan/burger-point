import React from 'react'
import founderImg from '../../assets/founder.png'

const Founder = () => {
    return (
        <section className="founder">
            <img src={founderImg} alt='' />
            <h2>Sanjeev Kapoor</h2>
            <p>
                Hello everyone I'm Sanjeev Kapoor and I'm the founder of BurgerPoint.
                Our mission is to create and serve most delcious burger in the world.
            </p>
        </section>
    )
}

export default Founder