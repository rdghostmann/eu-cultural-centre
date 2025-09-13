// app/(legal)/top-languages/page.tsx
"use client";

import { useMemo } from "react";

const LANGUAGES = [
  // Nigeria
  "English",
  "Hausa",
  "Yoruba",
  "Igbo",
  "Fulfulde",
  "Kanuri",
  "Tiv",
  "Ibibio",
  "Ijaw",
  "Edo",
  // Sign
  "Sign Language",
  // Africa (removed duplicates: English, Hausa, Yoruba already in Nigeria)
  "Swahili",
  "Arabic",
  "French",
  "Amharic",
  "Oromo",
  "Shona",
  "Zulu",
  // Europe (removed duplicates: English, French, Portuguese, Spanish, Arabic already used)
  "Russian",
  "German",
  "Italian",
  "Turkish",
  "Ukrainian",
  "Polish",
  "Romanian",
  "Dutch",
  "Greek",
  "Czech",
  "Hungarian",
  "Swedish",
  "Bulgarian",
  "Serbian",
  "Danish",
  "Finnish",
  // America (removed duplicates: English, Spanish, Portuguese, French, Dutch already used)
  // none left, skip
  // Asia (removed duplicates: Arabic, Turkish already used)
  "Mandarin Chinese",
  "Hindi",
  "Bengali",
  "Japanese",
  "Punjabi",
  "Korean",
  "Vietnamese",
  "Urdu",
];

function randomPastel(): string {
  const h = Math.floor(Math.random() * 360);
  const s = 65 + Math.random() * 15;
  const l = 82 + Math.random() * 10;
  return `hsl(${h} ${s}% ${l}%)`;
}

export default function TopLanguagesPage() {
  // unique languages
  const uniqueLangs = Array.from(new Set(LANGUAGES));

  const colors = useMemo(() => {
    return uniqueLangs.map(() => randomPastel());
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <section className="relative w-full overflow-hidden">
        <div
          className="relative h-[36vh] sm:h-[44vh] lg:h-[52vh]"
          style={{
            backgroundImage: "url(/top-languages.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
            <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold text-center drop-shadow">
              1st to Our Language Courses
            </h1>
            <p className="bg-slate-700 rounded-md py-1 px-2 mt-3 text-slate-100/90 text-center max-w-3xl">
              A quick overview of major spoken and signed languages worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Languages Grid */}
      <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-8 text-center">
          Language Courses We Offer
        </h2>
        <div
          className="
            grid gap-3
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
          "
        >
          {uniqueLangs.map((lang, i) => (
            <div
              key={lang}
              className="
                group relative rounded-2xl border border-slate-200
                bg-white shadow-sm overflow-hidden
                hover:shadow-md transition-shadow
              "
            >
              <div
                className="h-2 w-full"
                style={{ backgroundColor: colors[i] }}
                aria-hidden
              />
              <div className="p-4 flex items-center justify-center">
                <span className="text-sm sm:text-base font-semibold text-slate-800 text-center leading-tight">
                  {lang}
                </span>
              </div>
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: `${colors[i]}33` }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
