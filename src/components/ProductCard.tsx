import Image from "next/image";
import { Product } from "@/types/equipment";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group rounded-2xl bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative mb-3 h-36 overflow-hidden rounded-xl bg-[#EEF0F4]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <span className="inline-flex rounded-full bg-[#F5B82E]/20 px-3 py-1 text-xs font-semibold text-[#8C6300]">
        {product.badge}
      </span>
      <h3 className="mt-3 text-base font-bold text-[#111827]">{product.name}</h3>
      <p className="mt-2 text-sm leading-6 text-[#6B7280]">{product.description}</p>

      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-[#22C55E]/15 px-3 py-1 text-xs font-semibold text-[#15803D]">
          {product.availability}
        </span>
        <button
          type="button"
          className="rounded-full bg-[#080C1D] px-4 py-2 text-xs font-bold text-white transition group-hover:bg-[#F5B82E] group-hover:text-[#080C1D]"
        >
          طلب السعر
        </button>
      </div>
    </article>
  );
}
