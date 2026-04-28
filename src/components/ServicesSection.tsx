import Image from "next/image";
import { services } from "@/data/content";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#080C1D] py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-[#F5B82E]">خدماتنا</p>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
            أفضل من خدماتنا
          </h2>
          <p className="mt-3 text-sm text-white/75 sm:text-base">
            خدمات متكاملة لدعم مشاريع البناء والتشغيل
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl bg-white/5 p-4 shadow-sm ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="relative mb-3 h-36 overflow-hidden rounded-xl bg-white/10">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">
                {service.description}
              </p>
              <span className="mt-4 inline-flex rounded-full bg-[#F5B82E]/20 px-3 py-1 text-xs font-semibold text-[#F5B82E]">
                {service.badge}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
