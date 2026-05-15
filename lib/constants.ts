export const CLIENT_DATA = {
  SITE_TITLE: 'ЦЕХ | Детейлинг и автосервис',
  SITE_DESCRIPTION: 'Профессиональный детейлинг и комплексное обслуживание автомобилей в Москве. Полная реставрация кузова, химчистка салона, защита и уход.',
  KEYWORDS: 'детейлинг, автосервис, Москва, реставрация автомобиля, химчистка, полировка, защита кузова',
  AUTHOR: 'ЦЕХ Детейлинг',
  DOMAIN: 'https://ceh-detailing.ru',
  EMAIL: '[CLIENT_DATA: EMAIL]',
  PHONE: '[CLIENT_DATA: PHONE]',
  SERVICE_ADDRESS: '[CLIENT_DATA: SERVICE_ADDRESS]',
  LEGAL_ADDRESS: '[CLIENT_DATA: LEGAL_ADDRESS]',
  WORK_HOURS: '[CLIENT_DATA: WORK_HOURS]',
  COMPANY_NAME: '[CLIENT_DATA: COMPANY_NAME]',
  INN: '[CLIENT_DATA: INN]',
  OGRN: '[CLIENT_DATA: OGRN]',
  OGRN_LABEL: '[CLIENT_DATA: OGRN_LABEL]',
};

export const SITE_DATA = {
  services: [
    { name: 'Комплексная мойка', price: 'от 1 500 ₽', desc: 'Бережная трехфазная мойка кузова и уборка салона.', img: '/images/s1.jpg' },
    { name: 'Полировка кузова', price: 'от 5 000 ₽', desc: 'Устранение голограмм, царапин и придание зеркального блеска.', img: '/images/s2.jpg' },
    { name: 'Химчистка салона', price: 'от 3 000 ₽', desc: 'Глубокая очистка всех элементов интерьера.', img: '/images/s3.jpg' },
    { name: 'Керамическая защита', price: 'от 15 000 ₽', desc: 'Нанесение защитного слоя 9H для стойкости к царапинам.', img: '/images/s4.jpg' },
  ],
  process: [
    { title: 'Приемка и осмотр', desc: 'Детальный осмотр кузова под спец. освещением, фиксация дефектов.' },
    { title: 'Подготовка и очистка', desc: 'Удаление битума, колодочной пыли и металлических вкраплений.' },
    { title: 'Полировка', desc: 'Многоэтапная коррекция лакокрасочного покрытия.' },
    { title: 'Защита', desc: 'Нанесение керамики, воска или оклейка полиуретановой пленкой.' },
    { title: 'Выдача автомобиля', desc: 'Финальный контроль качества и передача авто владельцу.' }
  ],
  pricing: [
    { title: 'Базовый', price: '10 000 ₽', features: ['Трехфазная мойка', 'Легкая полировка', 'Очистка дисков'], isPopular: false },
    { title: 'Стандарт', price: '25 000 ₽', features: ['Глубокая химчистка салона', 'Восстановительная полировка', 'Нанесение воска', 'Антидождь на стекла'], isPopular: true },
    { title: 'Премиум', price: '60 000 ₽', features: ['Керамическое покрытие 2 слоя', 'Химчистка с разбором', 'Полировка оптики', 'Оклейка зон риска'], isPopular: false },
  ],
  reviews: [
    { text: 'Отличная работа! Машина выглядит как новая. Буду рекомендовать всем.', rating: 5 },
    { text: 'Очень довольна результатом. Детейлинг сделали быстро и аккуратно, всё в срок.', rating: 5 },
    { text: 'Цены адекватные, качество на высоте. Обращаюсь уже второй раз.', rating: 5 },
    { text: 'Полировка вышла идеально — машина блестит как новая. Спасибо мастерам.', rating: 5 },
    { text: 'Химчистка салона на отлично. Убрали пятна, которые казалось уже не вывести.', rating: 5 },
  ],
  gallery: [
    { src: '/images/car1.jpg', alt: 'Детейлинг автомобиля' },
    { src: '/images/car2.jpg', alt: 'Полировка кузова' },
    { src: '/images/car3.jpg', alt: 'Химчистка салона' },
    { src: '/images/car4.jpg', alt: 'Восстановление фар' },
  ],
};

export const LEGAL_TEXT_REQUIRED = {
  privacy: '[LEGAL_TEXT_REQUIRED: PRIVACY_POLICY]',
  offer: '[LEGAL_TEXT_REQUIRED: OFFER_TEXT]',
  consent: '[LEGAL_TEXT_REQUIRED: PD_CONSENT]',
  cookie: '[LEGAL_TEXT_REQUIRED: COOKIE_TEXT]',
};