import { Inter } from "next/font/google";
import { Product, FooterBanner, HeroBanner} from "@/components";
import { client } from "@/lib/client";

const inter = Inter({ subsets: ["latin"] });



export default function Home({products, bannerProducts}) {
  console.log(bannerProducts)
  return (
    <>
      <HeroBanner HeroBanner={bannerProducts ? bannerProducts : null}></HeroBanner>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers...</p>
      </div>

      <div>
        {products?.map(product=><Product>{product}</Product>)}
      </div>
      <FooterBanner></FooterBanner>
    </>
  );
}
export async function getServerSideProps(){
  const query = "*[_type == 'product']";
  const products = await client.fetch(query);
  const bannerQuery = "*[_type == 'banner']";
  const bannerProducts = await client.fetch(bannerQuery);

  return {
    props:{
      products,
      bannerProducts
    }
  }
}