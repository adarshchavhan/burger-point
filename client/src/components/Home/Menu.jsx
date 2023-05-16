import React from 'react'
import MenuCard from './MenuCard'
import burger1 from '../../assets/burger1.png'
import burger2 from '../../assets/burger2.png'
import burger3 from '../../assets/burger3.png'
import burger4 from '../../assets/burger4.png'
import {useDispatch} from 'react-redux'
import { addToCart, calculatePrice } from '../../redux/reducer/cartReducer'


const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (id, photo, price, name,  quantity) => {
      dispatch(addToCart({id, photo, price, name,  quantity}));
      dispatch(calculatePrice());
  }

  return (
    <section className="menu">
      <h1>Our Menu</h1>
      <div>
        <MenuCard id={0} photo={burger1} price={99} name={'Cheese Burger'} handler={addToCartHandler} />
        <MenuCard id={1} photo={burger2} price={199} name={'Veg Cheese Burger'} handler={addToCartHandler} />
        <MenuCard id={2} photo={burger3} price={249} name={'Burger With Fries'} handler={addToCartHandler} />
        <MenuCard id={3} photo={burger4} price={399} name={'Double Whopper Jr'} handler={addToCartHandler} />
      </div>
    </section>
  )
}

export default Menu