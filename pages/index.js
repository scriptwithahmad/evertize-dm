import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Ceo from "@/components/Ceo";
import AwesomeWork from "@/components/AwesomeWork";
import Features from "@/components/Features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <Hero />
      <AwesomeWork />
      <Ceo />
      <Features />
    </>
  );
}
