import React from "react";
import Link from "next/link";
import { BsBagXFill } from "react-icons/bs";
import * as classes from "@/styles/cancel.module.css";

const Success = () => {
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagXFill className={classes.textRed}/>
        </p>
        <h2>You successfully canceled your order!</h2>
        <p className='description'>
          If you have any questions, please email
          <a className='email' href='mailto:order@example.com'>
            order@example.com
          </a>
        </p>
        <Link href='/'>
          <button type='button' width='300px' className='btn'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
