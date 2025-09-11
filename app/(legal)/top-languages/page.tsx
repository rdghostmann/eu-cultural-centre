// app/(legal)/top-languages/page.tsx
"use client";

import { useMemo } from "react";

const LANGUAGES = {
  nigeria: [
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
  ],
  sign: ["Signed Language"],
  africa: [
    "Swahili",
    "Arabic",
    "French",
    "English",
    "Hausa",
    "Yoruba",
    "Amharic",
    "Oromo",
    "Shona",
    "Zulu",
  ],
  europe: [
    "English",
    "Russian",
    "German",
    "French",
    "Italian",
    "Spanish",
    "Turkish",
    "Ukrainian",
    "Polish",
    "Romanian",
    "Dutch",
    "Greek",
    "Portuguese",
    "Czech",
    "Hungarian",
    "Swedish",
    "Bulgarian",
    "Serbian",
    "Danish",
    "Finnish",
  ],
  america: [
    "English",
    "Spanish",
    "Portuguese",
    "French",
    "Dutch",
  ],
  asia: [
    "Mandarin Chinese",
    "Hindi",
    "Arabic",
    "Bengali",
    "Japanese",
    "Punjabi",
    "Korean",
    "Turkish",
    "Vietnamese",
    "Urdu",
  ],
};

// Pastel HSL generator for chip colors
function randomPastel(): string {
  const h = Math.floor(Math.random() * 360);
  const s = 65 + Math.random() * 15;
  const l = 82 + Math.random() * 10;
  return `hsl(${h} ${s}% ${l}%)`;
}

export default function TopLanguagesPage() {
  // Assign random pastel per language across all groups
  const colors = useMemo(() => {
    const all = Object.values(LANGUAGES).flat();
    return all.map(() => randomPastel());
  }, []);

  let colorIndex = 0;

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
              World Languages Snapshot
            </h1>
            <p className="bg-slate-700 rounded-md py-1 px-2 mt-3 text-slate-100/90 text-center max-w-3xl">
              A quick overview across Nigeria, Africa, Europe, Asia, and the Americas.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14 space-y-12">
        {Object.entries(LANGUAGES).map(([region, langs]) => (
          <div key={region}>
            <h2 className="text-lg sm:text-xl font-bold text-slate-800 mb-5 capitalize">
              {region === "nigeria" && "Top 10 Languages in Nigeria"}
              {region === "sign" && "Sign Language"}
              {region === "africa" && "Top 10 Languages in Africa"}
              {region === "europe" && "Top 20 Languages in Europe"}
              {region === "america" && "Top 5 Languages in South & North America"}
              {region === "asia" && "Top 10 Languages in Asia"}
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
              {langs.map((lang) => {
                const bg = colors[colorIndex++];
                return (
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
                      style={{ backgroundColor: bg }}
                      aria-hidden
                    />
                    <div className="p-4 flex items-center justify-center">
                      <span className="text-sm sm:text-base font-semibold text-slate-800 text-center leading-tight">
                        {lang}
                      </span>
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: `${bg}33` }}
                      aria-hidden
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
