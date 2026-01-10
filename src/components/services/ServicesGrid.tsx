"use client";

import { services } from "@/lib/constants";

export function ServicesGrid() {
  // Group services into pairs (rows)
  const rows: Array<[typeof services[0], typeof services[0] | undefined]> = [];
  for (let i = 0; i < services.length; i += 2) {
    rows.push([services[i], services[i + 1]]);
  }

  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-black overflow-hidden">

      {/* Blue glow effect at center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
        <div className="w-full h-full bg-cyan-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight italic">What We Offer</h2>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto">
            We offer strategic, technical, and responsive cybersecurity services tailored to your unique needs.
          </p>
        </div>

        {/* Alternating layout rows */}
        <div className="flex flex-col gap-5">
          {rows.map((row, rowIndex) => {
            // Odd rows (0, 2, 4...): Left small (2), Right large (3)
            // Even rows (1, 3, 5...): Left large (3), Right small (2)
            const isOddRow = rowIndex % 2 === 0;
            const hasSecondCard = row[1] !== undefined;

            return (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-5 gap-5"
              >
                {row.map((service, cardIndex) => {
                  if (!service) return null;

                  // Determine column span
                  let colSpan = "md:col-span-5"; // Default full width for single card
                  if (hasSecondCard) {
                    if (isOddRow) {
                      colSpan = cardIndex === 0 ? "md:col-span-2" : "md:col-span-3";
                    } else {
                      colSpan = cardIndex === 0 ? "md:col-span-3" : "md:col-span-2";
                    }
                  }

                  return (
                    <div
                      key={cardIndex}
                      className={`relative group p-6 md:p-8 min-h-[200px] flex flex-col items-center text-center ${colSpan}`}
                    >
                      {/* Glassmorphic background with visible dot grid */}
                      <div
                        className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm z-0"
                        style={{
                          backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
                          backgroundSize: '16px 16px'
                        }}
                      />

                      {/* Card border */}
                      <div className="absolute inset-0 border border-blue-500/40 z-0" />

                      {/* L-Corners blending into border */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500 z-10" />
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500 z-10" />
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500 z-10" />
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500 z-10" />

                      {/* Icon Box with border and L-corners */}
                      <div className="relative w-12 h-12 mb-5 z-10">
                        <div
                          className="absolute inset-0 bg-zinc-800/90"
                          style={{
                            backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
                            backgroundSize: '8px 8px'
                          }}
                        />
                        <div className="absolute inset-0 border border-blue-500/50" />
                        <div className="absolute -top-px -left-px w-2 h-2 border-t-2 border-l-2 border-blue-500" />
                        <div className="absolute -top-px -right-px w-2 h-2 border-t-2 border-r-2 border-blue-500" />
                        <div className="absolute -bottom-px -left-px w-2 h-2 border-b-2 border-l-2 border-blue-500" />
                        <div className="absolute -bottom-px -right-px w-2 h-2 border-b-2 border-r-2 border-blue-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 z-10">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/80 text-xs md:text-sm leading-relaxed z-10">
                        {service.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}