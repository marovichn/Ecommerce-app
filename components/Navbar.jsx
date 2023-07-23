"use client"

import React, { useState } from 'react'
import {AiOutlineShopping} from "react-icons/ai"
import Cart from './Cart';
import Link from 'next/link';
import { useStateContext } from '@/context/StateContext';

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities}=useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Shoppy Headphones</Link>
      </p>

      <button
        type='button'
        className='cart-icon'
        onClick={() =>setShowCart((prev)=>!prev)}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty -mt-3'>{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
}

export default Navbar