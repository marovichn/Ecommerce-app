import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <span className="flex justify-between w-full -mt-10">NAV <span>user | cart</span></span>
      <hr></hr>
      Banner
      <hr></hr>
      products
      <hr></hr>
      footer Banner
    </main>
  );
}
