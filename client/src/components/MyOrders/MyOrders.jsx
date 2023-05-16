import React, { useEffect } from 'react'
import {RiEyeFill} from 'react-icons/ri'
import {useSelector, useDispatch} from 'react-redux'
import { myOrders } from '../../redux/actions/orderActions';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const {orders} = useSelector(state => state.order);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(myOrders());
    },[]);
  return orders && (
    <div className="table">
        <h2>My Orders</h2>
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Status</th>
                        <th>Item Quantity</th>
                        <th>Ammount</th>
                        <th>Payment Method</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.length > 0 && orders?.map(item => <tr key={item?._id}>
                        <td>{item?._id}</td>
                        <td>{item?.orderStatus}</td>
                        <td>{item?.orderItems.length}</td>
                        <td>₹{item?.totalPrice}</td>
                        <td>{item?.paymentMethod}</td>
                        <td>
                            <Link to={`/orders/${item?._id}`}><RiEyeFill/></Link>
                        </td>
                    </tr>)}
                    
                    
                </tbody>
            </table>
           {orders.length <= 0 && <p className='error__message'>No orders yet.</p>}
        </div>
    </div>
  )
}

export default MyOrders