import Link from "next/link";
import { stats } from "@/data/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#070B1F] text-white"
      aria-label="القسم الرئيسي"
    >
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#070B1F]/85 to-[#070B1F]/95" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-14 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="max-w-3xl space-y-6 text-right">
          <span className="inline-flex rounded-full bg-[#F5B82E]/15 px-4 py-1 text-sm font-semibold text-[#F5B82E]">
            حلول متكاملة للمعدات الثقيلة
          </span>
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            السامي للمقاولات وتأجير المعدات
          </h1>
          <p className="max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            نوفر أحدث معدات البناء والرفع والحفر مع خدمات تشغيل موثوقة للمشاريع
            الإنشائية والصناعية.
          </p>
          <div className="flex flex-wrap items-center justify-start gap-3">
            <Link
              href="#equipment"
              className="rounded-full bg-[#F5B82E] px-6 py-3 text-sm font-bold text-[#080C1D] transition hover:brightness-105"
            >
              تصفح المعدات
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              تواصل معنا
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/5 px-4 py-3">
              <p className="text-xl font-extrabold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-[#F5B82E]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
