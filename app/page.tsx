import { FeaturedCollections } from "@/components/home/FeaturedCollection";
import HeroSection from "@/components/home/HeroSection";
import { Newsletter } from "@/components/home/NewsLetter";
import { Products } from "@/components/home/Products";
import { SpecialOffers } from "@/components/home/SpecialOffers";

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
