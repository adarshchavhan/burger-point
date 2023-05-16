import React from 'react'
import {RiDeleteBinFill} from 'react-icons/ri'

const CartItem = ({id, photo, price, name, quantity, handleQuantity}) => {
  return (
    <div className="cart__item">
        <div className="left">
            <img src={photo}/>
            <div className="text">
                <h2>{name}</h2>
                <p>₹{price}</p>
            </div>
        </div>
        <div className="right">
            <button onClick={() => handleQuantity(id, 0)}>-</button>
            <div>{quantity}</div>
            <button onClick={()=> handleQuantity(id,1)}>+</button>
            <button className='delete__btn' onClick={()=> handleQuantity(id, 2)}><RiDeleteBinFill/></button>
        </div>
    </div>
  )
}

export default CartItem