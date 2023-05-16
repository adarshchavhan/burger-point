import React from 'react'
import { RiShoppingBag3Line } from 'react-icons/ri'
import CartItem from './CartItem'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { calculatePrice, decrementQuantity, incrementQuantity, removeItem } from '../../redux/reducer/cartReducer'

const Cart = () => {

  const { cartItems, subTotal, taxPrice, shippingPrice, totalPrice } = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuantity = (id, type) => {
    switch (type) {
      case 0:
        dispatch(decrementQuantity({id}));
        dispatch(calculatePrice());
        break;
      case 1:
        dispatch(incrementQuantity({id}));
        dispatch(calculatePrice());
        break;
      default:
        dispatch(removeItem({id}));
        dispatch(calculatePrice());
        break;
    }
  }

  const handleCheckout = () => {
      navigate('/shipping')
  }

  return (
    <div className="cart__page">
      <div className="container">
        <div className="item__list">
          <h1><RiShoppingBag3Line />Cart Items</h1>
          <hr />
          {cartItems.length > 0 ? <div>{
            cartItems.map((item, i) => (
              <CartItem key={i} id={item.id} photo={item.photo} price={item.price} name={item.name} quantity={item.quantity} handleQuantity={handleQuantity} />
            ))
          }</div> : <div className='empty__msg'>
            <p>Cart is empty.</p>
            <Link to='/'>Explore Menu</Link>
          </div>}
        </div>
        {cartItems.length > 0 &&
          <div className="price__list">
            <h1>Subtotal</h1>
            <ul>
              <li>
                <b>Subtotal:-</b>
                <span>₹{subTotal}</span>
              </li>
              <li>
                <b>Tax:-</b>
                <span>₹{taxPrice}</span>
              </li>
              <li>
                <b>Shipping Charges:-</b>
                <span>{shippingPrice > 0 ? `₹${shippingPrice}` : 'FREE'}</span>
              </li>
              <li>
                <b>Total Price:-</b>
                <span>₹{Number(totalPrice).toFixed(2)}</span>
              </li>
            </ul>
            <button onClick={handleCheckout}>Checkout</button>
          </div>}
      </div>
    </div>
  )
}

export default Cart