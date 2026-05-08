export type ServiceCategory = "fumigation";

export type ServiceSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  category: ServiceCategory;
  bullets: string[];
  keywords: string[];
  preparation?: string[];
  sections?: ServiceSection[];
  faqs?: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "fumigaciya-skladiv",
    title: "Фумігація складів",
    short: "Професійна фумігація складських приміщень для знищення шкідників запасів з дотриманням усіх норм безпеки та оформленням документів.",
    category: "fumigation",
    bullets: [
      "Обробка складів, елеваторів та зерносховищ",
      "Підбір фуміганта та режиму експозиції",
      "Контроль герметизації",
      "Дегазація до безпечного рівня та акт"
    ],
    keywords: ["фумігація складів", "фітосанітарна обробка", "фумігація зерна", "елеватор"],
  },
  {
    slug: "fumigaciya-suden",
    title: "Фумігація суден на експорт",
    short: "Фітосанітарна обробка суден, що йдуть на експорт, із внесенням фуміганта під час завантаження та повним пакетом документів.",
    category: "fumigation",
    bullets: [
      "Обробка трюмів суден перед відправкою",
      "Внесення фуміганта під час завантаження",
      "Контроль експозиції",
      "Супровід документів для експорту"
    ],
    keywords: ["фумігація суден", "транзитна фумігація", "експорт", "порт"],
  },
  {
    slug: "fumigaciya-konteyneriv",
    title: "Фумігація контейнерів",
    short: "Фумігаційна обробка морських та залізничних контейнерів для безпечного перевезення сільгосппродукції з отриманням сертифіката.",
    category: "fumigation",
    bullets: [
      "Обробка вантажних контейнерів",
      "Швидке та безпечне внесення препарату",
      "Контроль процесу",
      "Оформлення фумігаційного сертифіката"
    ],
    keywords: ["фумігація контейнерів", "обробка контейнерів"],
  }
];

export const servicesBySlug: Record<string, Service> = Object.fromEntries(
  services.map((s) => [s.slug, s])
);

export function getService(slug: string): Service | undefined {
  return servicesBySlug[slug];
}
