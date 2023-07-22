import React from 'react'
import {AiOutlineShopping} from "react-icons/ai"
import Cart from './Cart';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Shoppy Headphones</Link>
      </p>

      <button
        type='button'
        className='cart-icon'
        onClick={() => {}/* setShowCart(true) */}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty -mt-3'>0</span>
      </button>

      {/* {showCart && <Cart />} */}
    </div>
  );
}

export default Navbar