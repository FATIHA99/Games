import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Games from "./components/Games/Games";
import GiveawaySection from "./components/GiveawaySection/GiveawaySection";


export default function Home() {
  return (
  <>
 
    <Hero/>
    <Games/>
    <GiveawaySection/>
  </>
  );
}
