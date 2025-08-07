import FeatureSection from "@/components/Feature";
import Hero from "@/components/Hero";
import Nav from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-[#EEEEEE]">
      <Nav />
      <Hero />
      <FeatureSection />
    </section>
  );
}
