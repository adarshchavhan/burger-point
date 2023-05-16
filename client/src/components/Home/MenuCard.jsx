import React from 'react'

const MenuCard = ({id, photo, price, name, handler}) => {

  return (
    <div className="menu__card">
        <img src={photo}/>
        <h2>{name}</h2>
        <p>₹{price}</p>
        <button onClick={()=> handler(id, photo, price, name, 1)}>Add to Cart</button>
    </div>
  )
}

export default MenuCard