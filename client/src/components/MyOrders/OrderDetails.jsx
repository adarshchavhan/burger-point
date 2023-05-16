import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { orderDetails } from '../../redux/actions/orderActions'
import {useParams} from 'react-router-dom'

const OrderDetails = () => {
    const {order} = useSelector(state => state.order);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch(orderDetails(id))
    },[])

    console.log(order)

    return order && (
        <div className="orderdetails__page">
            <div className="container">
                <aside>
                    <h3>Ordered Items</h3>
                    {order.orderItems?.map(item => (
                        <div className="item" key={item._id}>
                            <img src={item?.photo} alt="" />
                            <div className="text">
                                <h2 className="name">{item.name}</h2>
                                <p className="price">₹{item.price} × {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </aside>

                <main>
                    <h2>Order Details</h2>
                    <div className="order__details">
                        <div>
                            <span className='name'>
                                <b>Name:</b>
                                <p>{order.shippingInfo.name}</p>
                            </span>
                            <span className='address'>
                                <b>Address:</b>
                                <p>{`${order.shippingInfo.street}, ${order.shippingInfo.city}, ${order.shippingInfo.state} - ${order.shippingInfo.pinCode}`}</p>
                            </span>
                            <span className='phone'>
                                <b>PhoneNo:</b>
                                <p>{order.shippingInfo.phoneNo}</p>
                            </span>
                            <span>
                                <b>Current Status:</b>
                                <p>{order.orderStatus}</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <b>Paid At:</b>
                                <p>{order.paidAt ? order.paidAt : 'Not paid'}</p>
                            </span>
                            <span>
                                <b>Payment Mode:</b>
                                <p>{order.paymentMethod}</p>
                            </span>
                            <span>
                                <b>Payment Reference:</b>
                                <p>{order.paymentInfo ? order.paymentInfo : 'Not available'}</p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <b>Subtotal:</b>
                                <p>₹{order.itemPrice}</p>
                            </span>
                            <span>
                                <b>Shipping Charges:</b>
                                <p>₹{order.shippingPrice}</p>
                            </span>
                            <span>
                                <b>Tax:</b>
                                <p>₹{order.taxPrice}</p>
                            </span>
                            <span>
                                <b>Total Price:</b>
                                <p>₹{order.totalPrice}</p>
                            </span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default OrderDetails