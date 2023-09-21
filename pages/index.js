import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import ParticlesComponent from "@/components/Particles";
import Ceo from "@/components/Ceo";
import AwesomeWork from "@/components/AwesomeWork";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <AwesomeWork />
      <Ceo />
      {/* <ParticlesComponent /> */}
    </>
  );
}