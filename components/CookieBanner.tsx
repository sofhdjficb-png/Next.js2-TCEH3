"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { LEGAL_TEXT_REQUIRED } from "@/lib/constants";

export function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // States for categories [B5-cats]
  const [catAnalytics, setCatAnalytics] = useState(false);
  const [catMarketing, setCatMarketing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const saveConsent = (analytics: boolean, marketing: boolean) => {
    localStorage.setItem(
      "cookie_consent",
      JSON.stringify({ necessary: true, analytics, marketing })
    );
    setIsOpen(false);
    // Dispatch event for other components (like Map) to re-render
    window.dispatchEvent(new Event("cookie_consent_updated"));
  };

  const acceptAll = () => saveConsent(true, true);
  const acceptNecessary = () => saveConsent(false, false);
  const acceptSelected = () => saveConsent(catAnalytics, catMarketing);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:w-[450px] z-50 p-6 rounded-2xl bento-surface border border-surface-border shadow-2xl"
        >
          {!showSettings ? (
            <div>
              <h3 className="text-lg font-semibold mb-2">Настройки Cookie</h3>
              <div className="text-sm text-muted mb-4 prose-sm">
                {LEGAL_TEXT_REQUIRED.cookie} Мы используем файлы cookie. Продолжая работу, вы соглашаетесь с нашей{" "}
                <Link href="/policy" className="text-titanium hover:underline">Политикой конфиденциальности</Link>.
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={acceptAll} className="w-full bg-titanium text-obsidian font-semibold py-2.5 rounded-lg">
                  Принять все
                </button>
                <div className="flex gap-2">
                  <button onClick={acceptNecessary} className="flex-1 bg-surface border border-surface-border py-2 rounded-lg text-sm hover:bg-white/5 transition-colors">
                    Только обязательные
                  </button>
                  <button onClick={() => setShowSettings(true)} className="flex-1 bg-transparent border border-transparent py-2 rounded-lg text-sm text-platinum/70 hover:text-white transition-colors">
                    Настроить
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-4">Настройки категорий</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">Обязательные</div>
                    <div className="text-xs text-muted">Необходимы для работы сайта</div>
                  </div>
                  <input type="checkbox" checked disabled className="accent-titanium" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">Аналитика</div>
                    <div className="text-xs text-muted">Помогают улучшать сайт</div>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={catAnalytics}
                    onChange={(e) => setCatAnalytics(e.target.checked)}
                    className="accent-titanium" 
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">Маркетинг и Карты</div>
                    <div className="text-xs text-muted">Для показа виджетов (Яндекс.Карты)</div>
                  </div>
                  <input 
                    type="checkbox" 
                    checked={catMarketing}
                    onChange={(e) => setCatMarketing(e.target.checked)}
                    className="accent-titanium" 
                  />
                </div>
              </div>

              <button onClick={acceptSelected} className="w-full bg-titanium text-obsidian font-semibold py-2.5 rounded-lg">
                Сохранить настройки
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}