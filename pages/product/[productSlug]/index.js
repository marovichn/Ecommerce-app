import { client, urlFor } from "@/lib/client";
import Product from "@/components/Product";
import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";

export async function getStaticPaths() {
  const queryAll = `*[_type == "product"]`;
  const products = await client.fetch(queryAll);

  const allPaths = products.map(
    (product) => {
      return {
        params:{
          productSlug: product.slug.current
        }
      }}
  );

  return {
    paths: allPaths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const productSlug = context.params.productSlug;
  const query = `*[_type == "product" && slug.current == '${productSlug}'][0]`;
  const product = await client.fetch(query);
  const queryAll = `*[_type == "product"]`;
  const products = await client.fetch(queryAll);

  return {
    props: {
      product,
      products,
    },
  };
}

const page = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex]=useState(0);


  return (<div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={()=>setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={()=>{}}><AiOutlineMinus /></span>
              <span className="num">0</span>
              <span className="plus" onClick={()=>{}}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={() =>{}}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={()=>{}}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.filter(p=>p.slug.current !== product.slug.current).map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default page;