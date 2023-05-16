import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {GiHamburger} from 'react-icons/gi'
import {RiShoppingBag3Line, RiUserFill, RiLoginCircleFill} from 'react-icons/ri'
import {TiThMenu} from 'react-icons/ti'
import { useSelector } from 'react-redux'

const Header = () => {
    const path = useLocation().pathname;
    const [showMenu, setShowMenu] = useState(false);

    const {currentUser, isAuth} = useSelector(state => state.user);
    const {cartItems} = useSelector(state => state.cart);

    const handleMenu = () => {
        setShowMenu(false);
    }

  return (
    <header>
        {showMenu && <div className="backdrop" onClick={handleMenu}></div>}
        <div className="container">
            <button className='menu__btn' onClick={()=> setShowMenu(!showMenu)}>
                <TiThMenu/>
            </button>
            <Link to='/' className='logo'>
                <GiHamburger/>
                <span>BurgerPoint</span>
            </Link>

            <div className="menu">
                <nav className={showMenu ? 'active' : ''}>
                    <Link to='/' onClick={handleMenu} className={path==='/' ? 'active' : ''}>Home</Link>
                    <Link to='/about' onClick={handleMenu} className={path==='/about' ? 'active' : ''}>About</Link>
                    <Link to='/contact' onClick={handleMenu} className={path==='/contact' ? 'active' : ''}>Contact</Link>
                </nav>
                <div className="btn__wrapper">
                    {isAuth? (
                        <Link to='/me'><RiUserFill/><span>{currentUser?.name}</span></Link>
                    ): <Link to='/login'><RiLoginCircleFill/><span>Login</span></Link>}                
                    <Link to='/cart'><RiShoppingBag3Line/>{cartItems.length > 0 && <label>{cartItems.length}</label>}<span>Cart</span></Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header