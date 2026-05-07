import { getAbsoluteUrl, site } from "@/lib/site";
import type { Service } from "@/lib/services";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.alternateName,
    url: getAbsoluteUrl("/"),
    email: site.email,
    telephone: site.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: site.countryName,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: getAbsoluteUrl("/"),
    inLanguage: "uk-UA",
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    url: getAbsoluteUrl(`/poslugy/${service.slug}`),
    areaServed: {
      "@type": "Country",
      name: site.countryName,
    },
    provider: {
      "@type": "Organization",
      name: site.name,
      url: getAbsoluteUrl("/"),
    },
  };
}
