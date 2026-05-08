import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Послуги",
  description:
    "Повний спектр фумігаційних та фітосанітарних послуг: фумігація складів, суден та контейнерів.",
  alternates: { canonical: "/poslugy" },
};

export default function ServicesIndexPage() {
  return (
    <div className="flex-1 bg-zinc-50">
      <main id="main">
        <section className="border-b border-zinc-200 bg-white">
          <Container className="py-14 sm:py-16">
            <SectionHeading
              eyebrow="First Fumigation Company"
              title="Наші послуги"
              subtitle="Фумігація та фітосанітарний захист — під задачі будь-якої складності."
            />
          </Container>
        </section>

        <section className="bg-zinc-50">
          <Container className="py-12">
            <ServicesGrid services={services} />
          </Container>
        </section>
      </main>
    </div>
  );
}
