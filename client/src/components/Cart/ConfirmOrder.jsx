import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { paymentVarification, placeOrder } from '../../redux/actions/orderActions';
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { emptyCart } from '../../redux/reducer/cartReducer';

const ConfirmOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState('COD')

  const {
    cartItems:orderItems,
    subTotal:itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    shippingInfo
  } = useSelector(state => state.cart);

  const {message, loading, error} = useSelector(state => state.order);

  const dispatch = useDispatch();

  const handleChange = (e) =>{
    setPaymentMethod(e.target.value);
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    if(paymentMethod === 'COD'){
      dispatch(placeOrder({
        orderItems,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        shippingInfo,
        paymentMethod
      }));
    }else{
      const {data: {keyID}} = await axios.get('/orders/razorpay/key');
        const {data: {order}} = await axios.post(`${import.meta.env.VITE_BASE_URL}/orders/place/order`, {totalPrice});
        
        const options = {
            key: keyID,
            amount: order.amount,
            currency: 'INR',
            name: 'Burger Point',
            description: 'We serve best burger in the world',
            image: 'https://cdn-images-1.medium.com/max/1200/1*NKfnk1UF9xGoR0URBEc6mw.png',
            order_id: order?.id,
            handler: function (response) {
                  const {
                    razorpay_payment_id,
                    razorpay_order_id,
                    razorpay_signature,
                  } = response;
        
                  dispatch(paymentVarification({
                    razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
                orderOptions: {
                  orderItems,
                  itemPrice,
                  taxPrice,
                  shippingPrice,
                  totalPrice,
                  shippingInfo,
                  paymentMethod
                }
                  }));
        
                },

            theme: {
                color: '#ee7700'
            }
        }
        
        const razorpay = new window.Razorpay(options);
        razorpay.open();
    }


  }

  const navigate = useNavigate();

  useEffect(()=>{
    if(message){
      dispatch(emptyCart());
      toast.success(message);
      dispatch({
        type: 'clearMessage'
      })
      navigate('/me/orders')
    }
    if(error){
      toast.error(error);
      dispatch({
        type: 'clearError'
      })
    }

  },[message, error])

  return (
    <div className="confirmorder__page">
      <form onSubmit={handleSubmit}>
        <h2>Payment Method</h2>
        <div className="field">
          <label htmlFor="pay-cod">COD</label>
          <input type="radio" name="paymentMethod" id="pay-cod" value='COD' onChange={handleChange}/>
        </div>
        <div className="field">
          <label htmlFor="pay-online">Online</label>
          <input type="radio" name="paymentMethod" id="pay-online" value='online' onChange={handleChange} required/>
        </div>
        <button>Place Order</button>
      </form>
    </div>
  )
}

export default ConfirmOrder