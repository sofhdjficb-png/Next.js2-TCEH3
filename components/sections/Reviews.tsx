"use client";

import { SITE_DATA } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} из 5 звёзд`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-titanium" : "text-white/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  // 2 identical copies for seamless -50% marquee loop.
  // Each card uses mr-6 (not flex gap-6) so the last card's margin is
  // included in the track width, making -50% land exactly at the copy boundary.
  const twoSets = [...SITE_DATA.reviews, ...SITE_DATA.reviews];

  return (
    <section id="reviews" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
          Отзывы <span className="text-titanium">Клиентов</span>
        </h2>
        <p className="text-muted">Доверие, подтверждённое результатом.</p>
      </div>

      <div className="relative">
        {/* Fade-out edges — narrow on mobile so content is visible */}
        <div
          className="absolute left-0 top-0 bottom-0 w-12 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #050505, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-12 md:w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #050505, transparent)" }}
          aria-hidden="true"
        />

        {/* CSS marquee — mr-6 on each card (not gap-6) ensures track width
            includes the trailing gap, so translateX(-50%) hits the exact
            copy boundary and the loop is visually seamless. */}
        <div className="marquee-track flex" style={{ width: "max-content" }}>
          {twoSets.map((review, i) => (
            <div key={i} className="w-[300px] sm:w-[320px] flex-shrink-0 rounded-3xl bento-surface p-6 sm:p-8 mr-6">
              <StarRating rating={review.rating} />
              <p className="text-platinum/80 leading-relaxed my-4 text-sm">{review.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-titanium/10 border border-titanium/20 flex items-center justify-center shrink-0" aria-hidden="true">
                  <svg className="w-4 h-4 text-titanium" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-xs text-muted">Клиент автосервиса</span>
                <svg className="w-4 h-4 text-titanium ml-auto shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Проверенный отзыв">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
