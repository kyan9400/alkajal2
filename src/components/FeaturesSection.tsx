import { features } from "@/data/content";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <section className="mx-auto -mt-6 max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
