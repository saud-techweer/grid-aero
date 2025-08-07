export default function KeyPillars() {
  return (
    <section className="bg-black text-white py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Key Pillars</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Simple, rugged</h3>
          <p className="font-mono text-base leading-loose">
            Lifter (patent-pending) is purpose-built for cargo. No seats, no
            frills, no overengineering. Just the essentials: a rugged airframe,
            very few moving parts, a proven powertrain, and a simplified
            architecture designed for rapid, tool-less assembly and repair.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Distributed network operations at scale
          </h3>
          <p className="font-mono text-base leading-loose">
            Lifter aircraft operate as a resilient, distributed mesh. With
            seamless fleet-level supervision, a small ground team can command
            dozens of aircraft across vast regions.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            AI enhanced autonomy
          </h3>
          <p className="font-mono text-base leading-loose">
            Grid’s autonomy stack blends classical controls with modern AI,
            enabling aircraft to operate intelligently across long distances and
            in contested environments.
          </p>
        </div>
      </div>
    </section>
  );
}
