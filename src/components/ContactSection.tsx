import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-lg">
          <h2 className="text-xl font-bold text-[#111827] sm:text-2xl">اطلب عرض سعر</h2>
          <form className="mt-6 grid gap-4">
            {[
              "الاسم الكامل",
              "رقم الجوال",
              "نوع المعدة",
              "مدة الإيجار",
              "المدينة",
            ].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-medium text-[#374151]">
                {label}
                <input
                  type="text"
                  className="h-11 rounded-xl border border-gray-200 px-3 text-sm outline-none transition focus:border-[#F5B82E]"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-medium text-[#374151]">
              تفاصيل الطلب
              <textarea
                rows={4}
                className="rounded-xl border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-[#F5B82E]"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-xl bg-[#080C1D] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#F5B82E] hover:text-[#080C1D]"
            >
              إرسال الطلب
            </button>
          </form>
        </div>

        <aside className="rounded-3xl bg-[#080C1D] p-6 text-white shadow-lg">
          <p className="text-sm font-semibold text-[#F5B82E]">احجز الآن</p>
          <h3 className="mt-2 text-2xl font-extrabold">فريقنا جاهز لخدمتك</h3>
          <div className="mt-6 space-y-4 text-sm text-white/85">
            <p>📞 رقم الجوال: 0000 000 050</p>
            <p>✉️ البريد الإلكتروني: info@alsami.sa</p>
            <p>📍 العنوان: الرياض - المملكة العربية السعودية</p>
          </div>
          <Link
            href="https://wa.me/966500000000"
            target="_blank"
            className="mt-6 inline-flex rounded-full bg-[#F5B82E] px-5 py-3 text-sm font-bold text-[#080C1D] transition hover:brightness-105"
          >
            تواصل عبر واتساب
          </Link>
        </aside>
      </div>
    </section>
  );
}
