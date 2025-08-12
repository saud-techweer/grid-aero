// app/team/page.tsx
import Image from "next/image";

export default function OurTeam() {
  const members = [
    {
      name: "Arthur Dubois",
      role: "CEO",
      image: "/arthur.png",
      bio: "Arthur is an aerospace engineer and startup leader with deep expertise in autonomous aircraft. He has led multiple clean-sheet aircraft from concept to flight, played a key role in scaling Joby Aviation, and headed engineering at Xwing, where he developed advanced flight autonomy systems. Arthur combines hands-on technical depth with DoD experience and startup execution.",
      imagePosition: "right",
      linkedin: "#",
    },
    {
      name: "Chinmay Patel",
      role: "CTO",
      image: "/chinmay.png",
      bio: "Chinmay is a seasoned aerospace engineer and flight test director with deep expertise across uncrewed systems, piloted aircraft, and rapid development programs. He has led DoD-funded R&D, secured complex FAA approvals, and directed flight test campaigns for platforms ranging from advanced UAS to full-scale aircraft. His combination of technical depth and operational leadership makes him a rare asset in the aerospace industry.",
      imagePosition: "left",
      linkedin: "#",
    },
    {
      name: "Brandon Florian",
      role: "CCO",
      image: "/brandon.png",
      bio: "Brandon is a seasoned aerospace and defense executive with experience spanning strategy, innovation, and growth across government and commercial sectors. He has led business development at top firms like Northrop Grumman, Starburst, and Mandala Space Ventures. Brandon combines technical depth with strategic vision and an unmatched network in global A&D and venture.",
      imagePosition: "right",
      linkedin: "#",
    },
    {
      name: "Alex Kroll",
      role: "CSO",
      image: "/alex.png",
      bio: "Alex is a distinguished Test Pilot and aerospace leader with nearly two decades of U.S. Air Force and civilian aviation development experience including flight operations, acquisitions, and joint combat planning. A seasoned commercial pilot and startup builder, he has led product development and test campaigns across multiple advanced aerospace platforms. His work bridges operations, product development, partnerships, and next-gen flight systems.",
      imagePosition: "left",
      linkedin: "#",
    },
  ];

  return (
    <div className="bg-[#F5F5F5] px-6 md:px-16 lg:px-28 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">
        With 100+ years of aviation experience
      </h2>

      <div className="space-y-20">
        {members.map((member, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              member.imagePosition === "right" ? "" : "md:flex-row-reverse"
            }`}
          >
            {member.imagePosition === "left" && (
              <div className="w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold">
                {member.name} - {member.role}
              </h3>
              <p className="text-sm md:text-base mt-4 whitespace-pre-line">
                {member.bio}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin-icon.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="mt-4"
                />
              </a>
            </div>

            {member.imagePosition === "right" && (
              <div className="w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
