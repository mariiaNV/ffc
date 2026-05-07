import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`Логотип ${site.name}`}
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl border border-zinc-200 bg-white p-1 object-contain"
            />
            <div>
              <div className="text-sm font-semibold text-zinc-900">
                {site.name}
              </div>
              <div className="mt-1 text-sm text-zinc-600">{site.alternateName}</div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/poslugy" className="text-zinc-700 hover:text-zinc-900">
              Послуги
            </Link>
            <Link href="/#kontakty" className="text-zinc-700 hover:text-zinc-900">
              Контакти
            </Link>
            <Link href="/#pro-nas" className="text-zinc-700 hover:text-zinc-900">
              Про компанію
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-xs text-zinc-500">
          © {new Date().getFullYear()} {site.name}. Всі права захищені.
        </div>
      </Container>
    </footer>
  );
}
