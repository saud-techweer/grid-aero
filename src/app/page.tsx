import FeatureSection from "@/components/Feature";
import Hero from "@/components/Hero";
import IllustrationBoard from "@/components/IllustrationBoard";
import ImageWithBottomGradient from "@/components/ImageWithBottomGradient";
import InfoSection from "@/components/InfoSection";
import KeyPillars from "@/components/KeyPillars";
import Nav from "@/components/Navbar";
import TheGrid from "@/components/TheGrid";
import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-[#EEEEEE]">
      <Nav />
      <Hero />
      <IllustrationBoard />
      <TheGrid />
      <InfoSection />
      <ImageWithBottomGradient
        imageUrl="/IslandScene.png"
        alt="Scenic mountain landscape"
      />
      <KeyPillars
        pillars={[
          {
            title: "Simple, rugged",
            description:
              "Lifter is purpose-built for cargo, designed from first principles to deliver only what matters: a rugged airframe with minimal moving parts, a proven powertrain, and a simplified architecture for rapid assembly and repair. No waste, no frills—just scalable, reliable logistics at a fraction of the cost.",
            image: "/pillar1.png",
          },
          {
            title: "AI enhanced autonomy",
            description:
              "Grid’s autonomy stack blends classical controls with modern AI, enabling aircraft to operate intelligently across long distances and in contested environments. From takeoff to delivery, the system adapts in real time, learns from other aircraft across the Grid, and minimizes the need for human oversight.",
            image: "/pillar2.png",
          },
          {
            title: "Distributed network operations at scale",
            description:
              "Lifter aircraft operate as a resilient, distributed mesh. With seamless fleet-level supervision, a small ground team can command dozens of aircraft across vast regions.",
            image: "/pillar3.png",
          },
        ]}
      />

      {/* <FeatureSection /> */}
    </section>
  );
}
