import { EquipmentCategory } from "@/types/equipment";
import { ProductCard } from "./ProductCard";

type EquipmentSectionProps = {
  categories: EquipmentCategory[];
};

export function EquipmentSection({ categories }: EquipmentSectionProps) {
  return (
    <section id="equipment" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="space-y-10">
        {categories.map((category) => (
          <article key={category.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#111827] sm:text-2xl">
                {category.title}
              </h2>
              <a
                href="#contact"
                className="text-sm font-semibold text-[#B8860B] transition hover:text-[#F5B82E]"
              >
                عرض المزيد
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {category.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
