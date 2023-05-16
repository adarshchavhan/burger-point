import React, { useEffect } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/actions/userActions'
import {Toaster, toast} from 'react-hot-toast'

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'
import NoPage from './components/Layout/NoPage'
import Shipping from './components/Shipping/Shipping'
import ConfirmOrder from './components/Cart/ConfirmOrder'
import Profile from './components/Profile/Profile'
import MyOrders from './components/MyOrders/MyOrders'
import OrderDetails from './components/MyOrders/OrderDetails'
import ProtectedRoute from './components/Layout/ProtectedRoute'
import Loader from './components/Layout/Loader'

// styles
import './style/header.scss'
import './style/footer.scss'
import './style/home.scss'
import './style/about.scss'
import './style/contact.scss'
import './style/login.scss'
import './style/cart.scss'
import './style/nopage.scss'
import './style/shipping.scss'
import './style/confirmorder.scss'
import './style/payment.scss'
import './style/profile.scss'
import './style/table.scss'
import './style/dashboard.scss'
import './style/orderdetails.scss'
import './style/loader.scss'

const App = () => {
  const path = useLocation().pathname;
  const {isAuth, loading, message, currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(loadUser());
  },[dispatch])

  useEffect(()=>{
    if(message){
      toast.success(message);
      dispatch({
        type: 'clearMessage'
      })
    }
  },[message])

  useEffect(()=>{
    window.scrollTo(0,0);
  },[path])

  return loading===false ? (
      <>
        <Header />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<NoPage/>}/>

        <Route path='/login' element={
          <ProtectedRoute isAuth={!isAuth} redirect='/me'>
            <Login/>
          </ProtectedRoute>}
        />

        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route path='/shipping' element={<Shipping/>}/>
          <Route path='/confirmorder' element={<ConfirmOrder/>}/>
          <Route path='/me' element={<Profile/>}/>
          <Route path='/me/orders' element={<MyOrders/>}/>
          <Route path='/orders/:id' element={<OrderDetails/>}/>
        </Route>

      </Routes>
      <Footer/>
      <Toaster/>
      </>
  ) : <Loader/>
}

export default App