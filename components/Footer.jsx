import React from "react";
import {
  AiFillInstagram,
  AiOutlineCopyright,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p className='ml-8'>
        2023 Shoppy - All Rights Reserved{" "}
        <AiOutlineCopyright className='-mt-5 -ml-6' />
      </p>
      <p className='icons mt-3'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
