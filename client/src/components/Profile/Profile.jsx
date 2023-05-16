import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/userActions'

const Profile = () => {
  const {currentUser} = useSelector(state => state.user)

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return  (
    <div className="profile__page">
        <main>
            <img src={currentUser?.photo} alt=''/>
            <h2 className="name">{currentUser?.name}</h2>
            <p>{currentUser?.email}</p>
            <div>
                <Link to='/me/orders'>My Orders</Link>
            </div>
                <button onClick={handleLogout}>Logout</button>
        </main>
    </div>
  )
}

export default Profile