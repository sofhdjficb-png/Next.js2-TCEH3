import Link from "next/link";
import { CLIENT_DATA } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-surface-border bg-obsidian pt-24 pb-12 overflow-hidden">
      {/* Background massive text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black tracking-tighter text-white/5 pointer-events-none select-none">
        ЦЕХ
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="text-3xl font-black tracking-tighter mb-6 block">
              ЦЕХ<span className="text-titanium">.</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              {CLIENT_DATA.SITE_DESCRIPTION}
            </p>
          </div>

          <div>
            <h4 className="text-titanium font-semibold mb-6 uppercase tracking-widest text-xs">Услуги</h4>
            <ul className="space-y-3 text-sm text-platinum/70">
              <li><Link href="#services" className="hover:text-titanium transition-colors">Полировка кузова</Link></li>
              <li><Link href="#services" className="hover:text-titanium transition-colors">Химчистка салона</Link></li>
              <li><Link href="#services" className="hover:text-titanium transition-colors">Керамика & Защита</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-titanium font-semibold mb-6 uppercase tracking-widest text-xs">Контакты</h4>
            <ul className="space-y-3 text-sm text-platinum/70">
              <li>
                <a
                  href={!CLIENT_DATA.PHONE.includes('[') ? `tel:${CLIENT_DATA.PHONE.replace(/[^\d+]/g, '')}` : '#'}
                  className="hover:text-titanium transition-colors"
                >
                  {CLIENT_DATA.PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${CLIENT_DATA.EMAIL}`} className="hover:text-titanium transition-colors">
                  {CLIENT_DATA.EMAIL}
                </a>
              </li>
              <li className="pt-2">{CLIENT_DATA.SERVICE_ADDRESS}</li>
              <li>{CLIENT_DATA.WORK_HOURS}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-titanium font-semibold mb-6 uppercase tracking-widest text-xs">Документы</h4>
            <ul className="space-y-3 text-sm text-platinum/70">
              <li><Link href="/policy" className="hover:text-titanium transition-colors">Политика конфиденциальности</Link></li>
              <li><Link href="/policy#offer" className="hover:text-titanium transition-colors">Публичная оферта</Link></li>
            </ul>
          </div>
        </div>

        {/* ПУНКТ [A1] АУДИТОРА - Блок реквизитов */}
        <div className="border-t border-surface-border pt-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted">
          <div>
            &copy; {new Date().getFullYear()} {CLIENT_DATA.COMPANY_NAME}. Все права защищены. <br />
            {CLIENT_DATA.COMPANY_NAME} | ИНН: {CLIENT_DATA.INN} | {CLIENT_DATA.OGRN_LABEL}: {CLIENT_DATA.OGRN} <br />
            Юр. адрес: {CLIENT_DATA.LEGAL_ADDRESS}
          </div>
          <div className="md:text-right">
            Дизайн и разработка: Premium Studio
          </div>
        </div>
      </div>
    </footer>
  );
}