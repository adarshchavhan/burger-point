import React, { useEffect } from 'react'
import {State, City} from 'country-state-city'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setAddress } from '../../redux/actions/userActions'
import { addShippingInfo } from '../../redux/reducer/cartReducer'
import {useNavigate} from 'react-router-dom'

const Shipping = () => {
    const [data, setData] = useState({name:'adarsh', street:'Hanuman Nager, butibori', state:'MH', city:'Nagpur', pinCode:'441108', phoneNo:'7769920460'})
    const [defaultAdd, setDefaultAdd] = useState(false);
    
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    const handleDefaultAdd = (e) => {
        setDefaultAdd(e.target.checked ? true : false);
    }
    
    const {isAuth, userAddress} = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(defaultAdd){
            dispatch(setAddress(data));
        }
        dispatch(addShippingInfo(data));
        navigate('/confirmorder')
    }

    const handleSubmitDefault = (e) => {
        dispatch(addShippingInfo(userAddress));
        navigate('/confirmorder')
    }

  return (
    <div className="shipping__page">
        <div className="container">
            <form onSubmit={handleSubmit}>
            <h2>Shipping Details</h2>
                <div className="field">
                    <span>Name</span>
                    <input type="text" placeholder='Name' name='name' value={data.name} onChange={handleChange} required/>
                </div>
                <div className="field">
                    <span>Street</span>
                    <input type="text" placeholder='Street Address' name='street' value={data.street} onChange={handleChange} required/>
                </div>
                <div className="field">
                    <span>State</span>
                    <select name='state' value={data.state} onChange={handleChange} required>
                        <option value=''>State</option>
                        {State.getStatesOfCountry('IN').map(item => <option value={item.isoCode} key={item.isoCode}>{item.name}</option>)}
                    </select>
                </div>
                <div className="field">
                    <span>City</span>
                    <select name='city' value={data.city} onChange={handleChange} required>
                        <option value=''>City</option>
                        {City.getCitiesOfState('IN', 'MH').map((item, i) => <option value={item.isoCode} key={i}>{item.name}</option>)}
                    </select>
                </div>
                <div className="field">
                    <span>Pincode</span>
                    <input type="text" placeholder='Pincode' name='pinCode' value={data.pinCode} onChange={handleChange} required/>
                </div>
                <div className="field">
                    <span>Phone</span>
                    <input type="text" placeholder='Phone No.' name='phoneNo' value={data.phoneNo} onChange={handleChange} required/>
                </div>
                <div className="field btn">
                <button type='submit'>Confirm Order</button>
                {isAuth && <span>
                    <input type="checkbox" name="default" onChange={handleDefaultAdd} />
                    <p>Save as default address</p>
                </span>}
                </div>
            </form>

           {userAddress && <div className="default__address">
                <h3>Use Default Address</h3>
                <h2>{userAddress?.name}</h2>
                <p><b>Address:</b> {`${userAddress?.street}, ${userAddress?.city}, ${userAddress?.state} - ${userAddress?.pinCode}`}</p>
                <p><b>Phone:</b> {userAddress?.phoneNo}</p>
                <button onClick={handleSubmitDefault}>Confirm Order</button>
            </div>}
        </div>
    </div>
  )
}

export default Shipping