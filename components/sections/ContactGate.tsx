"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/animations";
import { LEGAL_TEXT_REQUIRED, CLIENT_DATA } from "@/lib/constants";
import Link from "next/link";

export function ContactGate() {
  const [hasMapConsent, setHasMapConsent] = useState(false);

  // FIX #6: useCallback ensures stable function reference for add/removeEventListener
  const checkConsent = useCallback(() => {
    try {
      const consentText = localStorage.getItem("cookie_consent");
      if (consentText) {
        const consent = JSON.parse(consentText);
        setHasMapConsent(!!consent.marketing);
      }
    } catch {
      setHasMapConsent(false);
    }
  }, []);

  useEffect(() => {
    checkConsent();
    window.addEventListener("cookie_consent_updated", checkConsent);
    return () => window.removeEventListener("cookie_consent_updated", checkConsent);
  }, [checkConsent]);

  const forceConsentAndReloadMap = () => {
    try {
      const consentText = localStorage.getItem("cookie_consent") || "{}";
      const consent = JSON.parse(consentText);
      consent.marketing = true;
      localStorage.setItem("cookie_consent", JSON.stringify(consent));
      setHasMapConsent(true);
      window.dispatchEvent(new Event("cookie_consent_updated"));
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
      {/* FIX #21: lg:items-stretch makes both columns equal height */}
      <div className="grid lg:grid-cols-2 gap-16 lg:items-stretch">

        {/* Contact Form */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Ждем вас в цехе</h2>
          <p className="text-muted mb-12">Оставьте заявку, и мы свяжемся с вами для расчета стоимости и записи.</p>

          <form className="space-y-6 relative" onSubmit={(e) => { e.preventDefault(); alert('Форма отправлена (Pre-sale)'); }}>
            {/* FIX #20: Honeypot anti-spam field */}
            <div className="absolute -left-[9999px] -top-[9999px]" aria-hidden="true">
              <label htmlFor="website-trap">Website</label>
              <input type="text" id="website-trap" name="website" autoComplete="off" tabIndex={-1} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inp-name" className="block text-xs uppercase tracking-widest text-muted font-bold mb-2">Имя</label>
                {/* FIX #7: Added id, name, autoComplete */}
                <input required type="text" id="inp-name" name="name" autoComplete="given-name"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 focus:outline-none focus:border-titanium transition-colors text-white" />
              </div>
              <div>
                <label htmlFor="inp-phone" className="block text-xs uppercase tracking-widest text-muted font-bold mb-2">Телефон</label>
                <input required type="tel" id="inp-phone" name="phone" autoComplete="tel"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 focus:outline-none focus:border-titanium transition-colors text-white" />
              </div>
            </div>

            <div>
              <label htmlFor="inp-message" className="block text-xs uppercase tracking-widest text-muted font-bold mb-2">Сообщение (необязательно)</label>
              <textarea id="inp-message" name="message" rows={3}
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 focus:outline-none focus:border-titanium transition-colors text-white resize-none" />
            </div>

            {/* ПУНКТ [B3] АУДИТОРА — required блокирует submit, checked НЕ установлен по умолчанию */}
            <div className="flex items-start gap-3">
              <input required type="checkbox" id="pd-consent" name="pd-consent" className="mt-1 accent-titanium w-5 h-5 shrink-0" />
              <label htmlFor="pd-consent" className="text-xs tracking-wide text-platinum/60">
                {LEGAL_TEXT_REQUIRED.consent} Я согласен на обработку персональных данных в соответствии с{" "}
                <Link href="/policy" className="text-titanium hover:underline">Политикой конфиденциальности</Link>.
              </label>
            </div>

            <button type="submit" className="w-full bg-titanium text-obsidian py-4 rounded-xl font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Оставить заявку
            </button>
          </form>
        </motion.div>

        {/* Map + Contacts (Cookie Gated — [B5]) */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="h-full flex flex-col gap-6">
          <div className="flex-1 rounded-3xl overflow-hidden bento-surface relative min-h-[360px]">
            {hasMapConsent ? (
              <div className="w-full h-full flex items-center justify-center text-muted text-sm">
                {/* POST-SALE: заменить на реальный iframe Яндекс.Карт */}
                Яндекс.Карта (POST-SALE)
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <svg className="w-12 h-12 text-muted mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-bold mb-2">Карта недоступна</h3>
                <p className="text-sm text-platinum/60 mb-6">Необходимо согласие на cookie категории «Маркетинг».</p>
                <button onClick={forceConsentAndReloadMap}
                  className="bg-white/[0.05] border border-titanium/30 px-6 py-2 rounded-lg text-titanium text-sm hover:bg-titanium hover:text-obsidian transition-colors">
                  Разрешить и показать карту
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bento-surface p-6 rounded-2xl">
              <div className="text-xs uppercase tracking-widest text-muted font-bold mb-1">Адрес</div>
              <div className="text-sm text-platinum/90">{CLIENT_DATA.SERVICE_ADDRESS}</div>
            </div>
            <div className="bento-surface p-6 rounded-2xl">
              <div className="text-xs uppercase tracking-widest text-muted font-bold mb-1">Часы работы</div>
              <div className="text-sm text-platinum/90">{CLIENT_DATA.WORK_HOURS}</div>
            </div>
            <div className="col-span-2 bento-surface p-6 rounded-2xl">
              <div className="text-xs uppercase tracking-widest text-muted font-bold mb-1">Телефон</div>
              <a href={!CLIENT_DATA.PHONE.includes('[') ? `tel:${CLIENT_DATA.PHONE.replace(/[^\d+]/g, '')}` : '#'}
                className="text-lg font-bold text-titanium hover:text-white transition-colors">
                {CLIENT_DATA.PHONE}
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}