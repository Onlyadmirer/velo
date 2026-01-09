
import { FeaturedCollections } from "@/components/sections/FeaturedCollection";
import HeroSection from "@/components/sections/HeroSection";
import { Newsletter } from "@/components/sections/NewsLetter";
import { Products } from "@/components/sections/Products";
import { SpecialOffers } from "@/components/sections/SpecialOffers";

export default function Home() {
  return (
    <>
        <HeroSection />
        <FeaturedCollections />
        <SpecialOffers />
        <Products />
        <Newsletter />
    </>
  );
}
