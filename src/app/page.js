import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Games from "./components/Games/Games";
import GiveawaySection from "./components/GiveawaySection/GiveawaySection";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";


export default function Home() {
  return (
  <>
 
    <Navbar/>
    <Hero/>
    <Games/>
    <GiveawaySection/>
    <Footer/>
  </>
  );
}
