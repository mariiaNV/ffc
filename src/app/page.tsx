import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { LinkButton } from "@/components/LinkButton";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { services } from "@/lib/services";
import { getPublicAssetPath, site } from "@/lib/site";

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
      {children}
    </span>
  );
}

export default function Home() {
  const workProcessGallery = [4, 5, 6, 7, 8, 9].map((number) => ({
    src: getPublicAssetPath(`/${number}.jpg`),
    alt: `Процес роботи — фото ${number}`,
  }));

  workProcessGallery.push(
    {
      src: getPublicAssetPath("/photo1.png"),
      alt: "Процес роботи — додаткове фото 1",
    },
    {
      src: getPublicAssetPath("/photo2.png"),
      alt: "Процес роботи — додаткове фото 2",
    },
  );

  return (
    <div className="flex-1">
      <main id="main">
        <section aria-label="Банер" className="border-b border-zinc-200 bg-zinc-50">
          <Container className="py-6 sm:py-8">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <div className="relative h-56 sm:h-72 lg:h-96">
                <Image
                  src={getPublicAssetPath("/banner2.jpg")}
                  alt="Банер First Fumigation Company"
                  fill
                  priority
                  sizes="(min-width: 1024px) 1152px, 100vw"
                  className="object-cover object-[right_bottom]"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-50">
          <Container className="py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap gap-2">
                  <Badge>Фумігація</Badge>
                  <Badge>Фітосанітарний захист</Badge>
                  <Badge>GAFTA / FOSFA</Badge>
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                  {site.name}
                </h1>
                <p className="mt-3 text-lg font-semibold text-emerald-700">
                  {site.alternateName}
                </p>

                <p className="mt-6 text-base leading-7 text-zinc-600">
                  Ми виконуємо професійну фумігацію складів, суден, що йдуть на експорт, та контейнерів. Гарантуємо ефективний фітосанітарний захист, дотримання норм безпеки та збереження якості продукції.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href="/#kontakty" variant="primary">
                    Отримати консультацію
                  </LinkButton>
                  <LinkButton href="/poslugy" variant="secondary">
                    Наші послуги
                  </LinkButton>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                    <div className="text-sm font-semibold text-zinc-900">
                      24/7
                    </div>
                    <div className="mt-1 text-sm text-zinc-600">
                      Працюємо у зручний час, включаючи вихідні.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                    <div className="text-sm font-semibold text-zinc-900">
                      Документи
                    </div>
                    <div className="mt-1 text-sm text-zinc-600">
                      Акт/сертифікат міжнародного зразка.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                    <div className="text-sm font-semibold text-zinc-900">
                      Одеса
                    </div>
                    <div className="mt-1 text-sm text-zinc-600">
                      Оперативна координація портових робіт.
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-2 lg:order-3 lg:col-span-12">
                <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                  <div className="relative h-44 sm:h-60 lg:h-72">
                    <Image
                      src={getPublicAssetPath("/banner.jpg")}
                      alt="Банер First Fumigation Company"
                      fill
                      sizes="(min-width: 1024px) 1152px, 100vw"
                      className="object-cover object-[right_top]"
                    />
                  </div>
                </div>
              </div>

              <div className="order-3 lg:order-2 lg:col-span-5">
                <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                  <div className="text-sm font-semibold text-zinc-900">
                    Виконуємо замовлення будь-якої складності
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    Обробка вантажів фумігантами, встановлення систем
                    рециркуляції на суднах і в зерносховищах, колорація зерна та
                    дегазація.
                  </p>
                  <div className="mt-5 grid gap-3">
                    <div className="rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                      Фумігація складів та зерносховищ
                    </div>
                    <div className="rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                      Фумігація суден на експорт
                    </div>
                    <div className="rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                      Фумігація контейнерів
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="pro-nas" className="bg-white">
          <Container className="py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <SectionHeading
                  eyebrow="Про компанію"
                  title="Професійний фітосанітарний захист"
                  subtitle="First Fumigation Company — провідна фумігаційна компанія, що застосовує сучасні технології знезараження для захисту врожаю та вантажів."
                />

                <div className="mt-8 space-y-4 text-sm leading-6 text-zinc-700">
                  <p>
                    Даний сегмент охоплює фітосанітарну обробку (фумігацію) з метою
                    захисту врожаю від шкідників запасів під час зберігання та
                    транспортування.
                  </p>
                  <p>
                    Репутація та якість обслуговування підтверджені сертифікатами
                    Фітосанітарної асоціації України, Міжнародної асоціації торгівлі
                    зерном і кормами GAFTA та FOSFA.
                  </p>
                  <p>
                    Досвід і знання спеціалістів First Fumigation Company
                    допомагають захищати продукцію аграріїв на шляху до кінцевих
                    споживачів по всьому світу.
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                  <div className="text-sm font-semibold text-zinc-900">
                    Відгук професійної спільноти
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    «Фітосанітарна асоціація України пишається компанією First
                    Fumigation Company, величезний досвід якої відкриває нові
                    горизонти та дає можливості зробити разом вагомий внесок у
                    розвиток сфери захисту рослин».
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm lg:mr-0">
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-emerald-50" />
                  <div className="absolute left-6 top-6 h-16 w-16 rounded-full border border-emerald-100 bg-emerald-50" />
                  <div className="absolute right-8 top-10 h-10 w-10 rounded-full border border-zinc-200 bg-zinc-50" />
                  <Image
                    src={getPublicAssetPath("/block2.png")}
                    alt="Команда First Fumigation Company"
                    width={720}
                    height={720}
                    className="relative z-10 h-80 w-full object-contain object-bottom p-6 sm:h-96"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="poslugy" className="border-y border-zinc-200 bg-zinc-50">
          <Container className="py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <SectionHeading
                  eyebrow="Наші послуги"
                  title="Комплексна фумігація та знезараження"
                  subtitle="Повний комплекс робіт — від знезараження до підготовки сертифікатів."
                />
                <Link
                  href="/poslugy"
                  className="mt-5 hidden text-sm font-semibold text-emerald-700 hover:text-emerald-800 sm:inline-flex"
                >
                  Усі послуги →
                </Link>
              </div>

              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm lg:mr-0">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-emerald-50" />
                  <div className="absolute left-6 top-6 h-16 w-16 rounded-full border border-emerald-100 bg-emerald-50" />
                  <div className="absolute right-8 top-10 h-10 w-10 rounded-full border border-zinc-200 bg-zinc-50" />
                  <Image
                    src={getPublicAssetPath("/app1.png")}
                    alt="Спеціаліст First Fumigation Company"
                    width={420}
                    height={420}
                    className="relative z-10 mx-auto h-72 w-full object-contain object-bottom sm:h-80"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <ServicesGrid services={services} />
            </div>

            <div className="mt-10 sm:hidden">
              <LinkButton href="/poslugy" variant="secondary" className="w-full">
                Переглянути всі послуги
              </LinkButton>
            </div>
          </Container>
        </section>

        <section id="etapy" className="bg-white">
          <Container className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Як ми працюємо"
              title="Чотири фази якісної фумігації"
              subtitle="Процес прозорий і контрольований на кожному етапі — від внесення фуміганта до перевірки результату."
            />

            <ol className="mt-10 grid gap-6 lg:grid-cols-4">
              <li className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-xs font-semibold text-emerald-700">Фаза 1</div>
                <div className="mt-2 text-base font-semibold text-zinc-900">
                  Фумігація
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Внесення необхідної кількості фуміганта в продукт або
                  приміщення.
                </p>
              </li>
              <li className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-xs font-semibold text-emerald-700">Фаза 2</div>
                <div className="mt-2 text-base font-semibold text-zinc-900">
                  Експозиція
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Витримка фуміганта протягом достатнього часу для повної дії.
                </p>
              </li>
              <li className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-xs font-semibold text-emerald-700">Фаза 3</div>
                <div className="mt-2 text-base font-semibold text-zinc-900">
                  Дегазація
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Вентиляція та видалення фуміганта до безпечного рівня.
                </p>
              </li>
              <li className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-xs font-semibold text-emerald-700">Фаза 4</div>
                <div className="mt-2 text-base font-semibold text-zinc-900">
                  Перевірка
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Перевірка результату та оформлення необхідних документів.
                </p>
              </li>
            </ol>

            <div className="mt-14">
              <SectionHeading
                eyebrow="Процес у фото"
                title="Як виглядає робота на об’єкті"
                subtitle="Реальні кадри з виконання робіт — від підготовки до контролю результату."
              />

              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {workProcessGallery.map((photo, index) => (
                  <li
                    key={photo.src}
                    className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50"
                  >
                    <div className="relative h-56">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <span className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-semibold text-zinc-700">
                        {index + 1}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <Container className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Куток інформації"
              title="Короткі матеріали для клієнтів"
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="mx-auto w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white sm:max-w-sm">
                <div
                  className="relative w-full bg-zinc-50"
                  style={{ aspectRatio: "9 / 16" }}
                >
                  <Image
                    src={getPublicAssetPath("/info1.jpg")}
                    alt="Куток інформації — слайд 1"
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mx-auto w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white sm:max-w-sm">
                <div
                  className="relative w-full bg-zinc-50"
                  style={{ aspectRatio: "9 / 16" }}
                >
                  <Image
                    src={getPublicAssetPath("/info2.jpg")}
                    alt="Куток інформації — слайд 2"
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 384px, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="perevagy" className="border-y border-zinc-200 bg-zinc-50">
          <Container className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Наші переваги"
              title="Сервіс, який відчувається з першого контакту"
              subtitle="Працюємо відповідально, швидко й документально правильно — під ваші строки та вимоги."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-zinc-900">
                  Чіткий сервіс і консультації
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                  <li>
                    Наші фахівці виконають повний комплекс послуг
                    у зручний для вас час (включаючи вихідні та нічний час).
                  </li>
                  <li>
                    Безкоштовно надаємо консультації для підтримки необхідного
                    санітарного стану об’єктів.
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-zinc-900">
                  Гарантія та контроль якості
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                  <li>
                    На виконувані роботи надаємо гарантію у вигляді фумігаційного
                    сертифіката (акта) міжнародного зразка.
                  </li>
                  <li>
                    Герметизація приміщень і контейнерів (заклеювання щілин) — для
                    якісної обробки та проникнення препарату.
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50">
          <Container className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Сертифікація"
              title="Підтверджена репутація та стандарти"
              subtitle="Якість та досвід компанії підтверджені професійними асоціаціями та практикою міжнародних поставок."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-zinc-900">
                  Фітосанітарна асоціація України
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Партнерство заради розвитку сфери захисту рослин та сталих
                  стандартів.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-zinc-900">GAFTA</div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Практика роботи в логіці міжнародної торгівлі зерном і кормами.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-zinc-900">FOSFA</div>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Досвід у ланцюгах постачання олійних культур, олій і жирів.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6">
              <div className="text-sm font-semibold text-zinc-900">
                Про роль професійної спільноти
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                Об’єднання професіоналів допомагає формуванню в Україні потужної
                конкурентоспроможної галузі фітосанітарії, розвитку виробничої та
                комерційної діяльності на благо українського суспільства та
                міжнародної спільноти на засадах сталого розвитку та слідування
                європейським стандартам і цінностям.
              </p>
            </div>
          </Container>
        </section>

        <section id="kontakty" className="bg-white">
          <Container className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Контакти"
              title="Зв’яжіться з нами — підкажемо оптимальне рішення"
              subtitle="Надішліть коротку інформацію про об’єкт або вантаж — і ми запропонуємо план робіт, строки та перелік документів."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                <div className="text-sm font-semibold text-zinc-900">
                  Контактні дані
                </div>
                <div className="mt-4 space-y-3 text-sm text-zinc-700">
                  <div>
                    <span className="font-semibold">Місто:</span> {site.city},{" "}
                    {site.countryName}
                  </div>
                  <div>
                    <span className="font-semibold">Телефон:</span>{" "}
                    <a
                      href={`tel:${site.phoneTel}`}
                      className="text-emerald-700 hover:text-emerald-800"
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="text-emerald-700 hover:text-emerald-800"
                    >
                      {site.email}
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold">E-mail директора:</span>{" "}
                    <a
                      href={`mailto:${site.directorEmail}`}
                      className="text-emerald-700 hover:text-emerald-800"
                    >
                      {site.directorEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-semibold text-zinc-900">
                  Що написати для швидкої відповіді
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                  <li>Тип об’єкта: склад / елеватор / контейнер / судно / вагон</li>
                  <li>Культура або тип вантажу та обсяг партії</li>
                  <li>Локація та бажані строки виконання</li>
                  <li>Потрібні документи (за вимогами покупця/перевізника)</li>
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  >
                    Зателефонувати
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                  >
                    Написати на email
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
