import { LEGAL_TEXT_REQUIRED } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | ЦЕХ",
  robots: {
    index: false,
    follow: false,
  }
};

export default function PolicyPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="bento-surface border-surface-border rounded-3xl p-8 md:p-16">
        <div className="prose prose-invert max-w-none">
          {/* В POST-SALE этот блок будет заменён на реальный HTML-контент */}
          {LEGAL_TEXT_REQUIRED.privacy.startsWith('[') ? (
            <div className="py-16 text-center">
              <div className="inline-flex items-center gap-2 bg-titanium/10 border border-titanium/30 text-titanium px-4 py-2 rounded-full text-sm mb-6">
                PRE-SALE Заглушка
              </div>
              <h2 className="text-2xl font-bold mb-4">Политика конфиденциальности</h2>
              <code className="block text-titanium/70 text-sm font-mono">{LEGAL_TEXT_REQUIRED.privacy}</code>
              <p className="mt-6 text-muted text-sm max-w-md mx-auto">Текст политики конфиденциальности предоставляется клиентом после согласования с юристом в POST-SALE этапе.</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: LEGAL_TEXT_REQUIRED.privacy }} />
          )}

          <hr className="my-12 border-white/[0.06]" />

          <div id="offer">
          {LEGAL_TEXT_REQUIRED.offer.startsWith('[') ? (
            <div className="py-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Публичная оферта</h2>
              <code className="block text-titanium/70 text-sm font-mono">{LEGAL_TEXT_REQUIRED.offer}</code>
              <p className="mt-4 text-muted text-sm">Текст оферты предоставляется клиентом.</p>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: LEGAL_TEXT_REQUIRED.offer }} />
          )}
          </div>
        </div>
      </div>
    </div>
  );
}