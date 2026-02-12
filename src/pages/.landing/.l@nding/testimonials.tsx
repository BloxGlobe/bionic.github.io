"use client";

const testimonials = [
  {
    name: "Tendai M.",
    title: "University Student, Gaborone",
    quote: "Aether makes studying with my friends so much easier — the AI assistant is a game-changer!",
    flag: "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/bw.svg",
  },
  {
    name: "Kabelo R.",
    title: "High School Teacher, Francistown",
    quote: "The community chat and AI features help my students learn more effectively. Truly innovative.",
    flag: "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/bw.svg",
  },
  {
    name: "Nia L.",
    title: "Software Developer, Maun",
    quote: "Custom AI assistants in Aether save me tons of time when answering questions or sharing resources.",
    flag: "https://cdn.jsdelivr.net/gh/hjnilsson/country-flags/svg/bw.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Trusted by users from Botswana
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-8 rounded-2xl flex flex-col gap-6 hover:bg-white/10 transition-colors"
            >
              <p className="text-lg leading-relaxed">{t.quote}</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.flag}
                  alt="Botswana Flag"
                  className="w-10 h-6 rounded-sm object-cover border border-white/20"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-white/60">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
