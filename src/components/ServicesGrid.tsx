"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import type { Service } from "@/lib/services";

export function ServicesGrid({ services }: { services: Service[] }) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!selectedService) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedService]);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.slug}
            className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6"
          >
            <h3 className="text-base font-semibold text-zinc-900">
              {service.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">
              {service.short}
            </p>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setSelectedService(service)}
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                Детальніше →
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedService ? (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-zinc-950/60 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8"
          onMouseDown={() => setSelectedService(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-[88vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-zinc-200 px-5 py-4 sm:px-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  Послуга
                </div>
                <h3
                  id={titleId}
                  className="mt-1 text-xl font-semibold tracking-tight text-zinc-900"
                >
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Закрити"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[calc(88vh-84px)] overflow-y-auto px-5 py-5 sm:px-6">
              <p className="text-sm leading-6 text-zinc-700">
                {selectedService.short}
              </p>

              <div className="mt-6 rounded-2xl bg-zinc-50 p-5">
                <div className="text-sm font-semibold text-zinc-900">
                  Що входить у роботу
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                  {selectedService.bullets.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedService.preparation?.length ? (
                <div className="mt-6">
                  <div className="text-sm font-semibold text-zinc-900">
                    Підготовка
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                    {selectedService.preparation.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {selectedService.sections?.length ? (
                <div className="mt-6 space-y-5">
                  {selectedService.sections.slice(0, 3).map((section) => (
                    <section key={section.id}>
                      <h4 className="text-sm font-semibold text-zinc-900">
                        {section.title}
                      </h4>
                      <div className="mt-2 space-y-2 text-sm leading-6 text-zinc-700">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets?.length ? (
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-700">
                          {section.bullets.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 flex flex-col gap-3 border-t border-zinc-200 pt-5 sm:flex-row">
                <Link
                  href="/#kontakty"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Замовити консультацію
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  Закрити
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
