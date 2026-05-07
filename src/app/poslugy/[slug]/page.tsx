import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { LinkButton } from "@/components/LinkButton";
import { SectionHeading } from "@/components/SectionHeading";
import { getService, services } from "@/lib/services";
import { serviceJsonLd } from "@/lib/schema";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getService(params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/poslugy/${service.slug}` },
    keywords: service.keywords,
  } satisfies Metadata;
}

export default function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  const hasKnowledgeBase = Boolean(
    (service.preparation && service.preparation.length > 0) ||
      (service.sections && service.sections.length > 0) ||
      (service.faqs && service.faqs.length > 0)
  );

  const toc = [
    ...(service.preparation?.length
      ? [{ id: "pidgotovka", label: "Підготовка" }]
      : []),
    ...(service.sections?.map((s) => ({ id: s.id, label: s.title })) ?? []),
    ...(service.faqs?.length ? [{ id: "faq", label: "FAQ" }] : []),
  ];

  const isPestControl = service.category === "pest-control";
  const calloutTitle = isPestControl
    ? "Потрібен швидкий розрахунок та план дезінсекції?"
    : "Потрібен швидкий розрахунок та план робіт?";

  const calloutBody = isPestControl
    ? "Опишіть тип об’єкта, площу, де саме бачите тарганів, чи є діти/тварини та бажаний час — ми підкажемо метод, підготовку та строки."
    : "Опишіть об’єкт, культуру/вантаж, напрям та бажані строки — ми підкажемо оптимальне рішення.";

  return (
    <div className="flex-1 bg-zinc-50">
      <Script
        id={`ld-service-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service)) }}
      />

      <main id="main">
        <section className="border-b border-zinc-200 bg-white">
          <Container className="py-14 sm:py-16">
            <div className="flex flex-col gap-6">
              <div>
                <Link
                  href="/poslugy"
                  className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  ← До списку послуг
                </Link>
              </div>
              <div className="max-w-3xl">
                <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
                  {service.title}
                </h1>
                <p className="mt-4 text-base leading-7 text-zinc-600">
                  {service.short}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {service.bullets.map((b) => (
                  <div
                    key={b}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm leading-6 text-zinc-700"
                  >
                    {b}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton href="/#kontakty" variant="primary">
                  Отримати консультацію
                </LinkButton>
                <LinkButton href="/" variant="secondary">
                  На головну
                </LinkButton>
              </div>
            </div>
          </Container>
        </section>

        {hasKnowledgeBase ? (
          <section className="bg-white">
            <Container className="py-16 sm:py-20">
              <SectionHeading
                eyebrow="База"
                title="Таргани: підготовка, безпека та відповіді на часті питання"
                subtitle="Зібрали короткий гайд, щоб обробка пройшла безпечно та дала стабільний результат."
              />

              <div className="mt-10 grid gap-6 lg:grid-cols-12">
                <aside className="lg:col-span-4">
                  <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
                    <div className="text-sm font-semibold text-zinc-900">
                      Навігація по сторінці
                    </div>
                    <ul className="mt-4 space-y-2 text-sm">
                      {toc.map((item) => (
                        <li key={item.id}>
                          <Link
                            href={`#${item.id}`}
                            className="font-semibold text-emerald-700 hover:text-emerald-800"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
                    <div className="text-sm font-semibold text-zinc-900">
                      Потрібна консультація?
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      Напишіть, де саме є активність, і ми запропонуємо метод та
                      підготовку.
                    </p>
                    <div className="mt-4">
                      <Link
                        href="/#kontakty"
                        className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                      >
                        Перейти до контактів →
                      </Link>
                    </div>
                  </div>
                </aside>

                <div className="lg:col-span-8">
                  <div className="space-y-10">
                    {service.preparation?.length ? (
                      <div
                        id="pidgotovka"
                        className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
                      >
                        <div className="text-sm font-semibold text-zinc-900">
                          Підготовка до обробки (чеклист)
                        </div>
                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                          {service.preparation.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {service.sections?.map((s) => (
                      <section
                        key={s.id}
                        id={s.id}
                        className="scroll-mt-24"
                      >
                        <h3 className="text-lg font-semibold text-zinc-900 sm:text-xl">
                          {s.title}
                        </h3>
                        {s.paragraphs.map((p) => (
                          <p key={p} className="mt-3 text-sm leading-6 text-zinc-700">
                            {p}
                          </p>
                        ))}
                        {s.bullets?.length ? (
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                            {s.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        ) : null}
                      </section>
                    ))}

                    {service.faqs?.length ? (
                      <section id="faq" className="scroll-mt-24">
                        <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                          FAQ
                        </div>
                        <h3 className="mt-2 text-lg font-semibold text-zinc-900 sm:text-xl">
                          Поширені питання
                        </h3>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          {service.faqs.map((f) => (
                            <div
                              key={f.question}
                              className="rounded-2xl border border-zinc-200 bg-white p-6"
                            >
                              <div className="text-sm font-semibold text-zinc-900">
                                {f.question}
                              </div>
                              <p className="mt-2 text-sm leading-6 text-zinc-700">
                                {f.answer}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>
                    ) : null}
                  </div>
                </div>
              </div>
            </Container>
          </section>
        ) : null}

        <section className="bg-zinc-50">
          <Container className="py-12">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <div className="text-sm font-semibold text-emerald-900">
                {calloutTitle}
              </div>
              <div className="mt-2 text-sm leading-6 text-emerald-900/80">
                {calloutBody}
              </div>
              <div className="mt-4">
                <Link
                  href="/#kontakty"
                  className="text-sm font-semibold text-emerald-800 hover:text-emerald-900"
                >
                  Перейти до контактів →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
