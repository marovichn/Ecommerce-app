import { Inter } from "next/font/google";
import { Product, FooterBanner, HeroBanner } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      hero Banner
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers...</p>
      </div>

      <div>
        {["prodduct1", "product2"].map(product=><div>{product}</div>)}
      </div>
    </>
  );
}
