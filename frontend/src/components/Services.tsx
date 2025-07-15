import { MagicCard } from "../components/magicui/magic-card";
import { Marquee } from "../components/magicui/marquee";
import ServiceCard from "./ServiceCard";
import { services } from "../Info"; // Adjust the import path as necessary
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="bg-white py-24 px-4">
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-16">
        Our Services
      </h2>

      <div
        className="
        max-w-7xl mx-auto
        grid gap-10
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
      >
        {services.map((s, i) => (
          <MagicCard
            key={i}
            gradientSize={220}
            gradientFrom="#60a5fa"
            gradientTo="#a78bfa"
            gradientOpacity={0.2}
            className="rounded-xl transform transition-transform duration-300 hover:scale-[1.03]"
          >
            <ServiceCard {...s} />
          </MagicCard>
        ))}
      </div>
    </section>
  );
}
