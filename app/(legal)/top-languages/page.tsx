// app/(legal)/top-languages/page.tsx
"use client";

import { useMemo } from "react";
import Image from "next/image";

const LANGUAGES = [
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
    "Slovak",
    "Norwegian",
    "Croatian",
    "Lithuanian",
    "Slovenian",
    "Latvian",
    "Estonian",
    "Bosnian",
    "Macedonian",
    "Albanian",
    "Belarusian",
    "Irish",
    "Scottish Gaelic",
    "Welsh",
    "Catalan",
    "Galician",
    "Basque",
    "Maltese",
    "Icelandic",
    "Luxembourgish",
    "Armenian",
    "Georgian",
    "Azerbaijani",
    "Montenegrin",
    "Frisian",
    "Sorbian",
    "Manx",
    "Cornish",
    "Romansh",
    "Breton",
];

// Pastel HSL generator for nice readable chips
function randomPastel(): string {
    const h = Math.floor(Math.random() * 360);   // any hue
    const s = 65 + Math.random() * 15;           // 65–80% saturation
    const l = 82 + Math.random() * 10;           // 82–92% lightness
    return `hsl(${h} ${s}% ${l}%)`;
}

export default function TopLanguagesPage() {
    // Stable per render; regenerated on hard refresh/navigation
    const colors = useMemo(
        () => LANGUAGES.map(() => randomPastel()),
        []
    );

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
            {/* Header with parallax image */}
            <section className="relative w-full overflow-hidden">
                <div
                    className="relative h-[36vh] sm:h-[44vh] lg:h-[52vh] will-change-transform"
                    style={{
                        backgroundImage: 'url(/top-languages.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                    }}
                >
                    {/* subtle overlay for text legibility */}
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4">
                        <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold text-center drop-shadow">
                            Top 50 European Languages
                        </h1>
                        <p className="bg-slate-700 rounded-md py-1 px-2 mt-3 text-slate-100/90 text-center max-w-3xl">
                            A quick snapshot for learners, travelers, and culture lovers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid list */}
            <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
                <div
                    className="
            grid gap-3
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
          "
                >
                    {LANGUAGES.map((lang, i) => (
                        <div
                            key={lang}
                            className="
                group relative rounded-2xl border border-slate-200
                bg-white shadow-sm overflow-hidden
                hover:shadow-md transition-shadow
              "
                        >
                            {/* Colored band on top */}
                            <div
                                className="h-2 w-full"
                                style={{ backgroundColor: colors[i] }}
                                aria-hidden
                            />
                            {/* Language label */}
                            <div className="p-4 flex items-center justify-center">
                                <span
                                    className="
                    text-sm sm:text-base font-semibold text-slate-800
                    text-center leading-tight
                  "
                                >
                                    {lang}
                                </span>
                            </div>

                            {/* Subtle hover tint */}
                            <div
                                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ backgroundColor: `${colors[i]}33` }} // ~20% opacity
                                aria-hidden
                            />
                        </div>
                    ))}
                </div>

                {/* Legend / note */}
                <p className="hidden mt-8 text-center text-slate-500 text-sm">
                    Colors are randomly generated for visual variety on each visit.
                </p>
            </section>
        </main>
    );
}
