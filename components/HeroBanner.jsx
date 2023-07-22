import { urlFor } from "@/lib/client";
import Link from "next/link";
import React from "react";

const HeroBanner = ({bannerData}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{bannerData.smallText}</p>
        <h3 className='font-bold'>{bannerData.midText}</h3>
        <h1 className='font-bold'>{bannerData.largeText1}</h1>
        <img
          src={urlFor(bannerData.image)}
          alt='headphones'
          className='hero-banner-image'
        />

        <div>
          <Link href={`/product/${bannerData.product}`}>
            <button type='button'>{bannerData.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{bannerData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
