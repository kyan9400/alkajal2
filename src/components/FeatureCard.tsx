type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#080C1D] text-lg text-[#F5B82E]">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-[#111827]">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-[#6B7280]">{description}</p>
    </article>
  );
}
