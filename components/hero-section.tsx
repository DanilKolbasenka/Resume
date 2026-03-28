import Image from "next/image";
import { contactLinks } from "@/data/contacts";
import { siteConfig } from "@/data/site";
import { withBasePath } from "@/lib/site";

const prominentLinks = contactLinks.filter((link) => link.prominent);

export function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-mt-28 px-4 pb-16 pt-12 sm:scroll-mt-32 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24"
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-start xl:gap-12">
        <div className="flex flex-col">
          <div className="relative w-full overflow-hidden rounded-[32px] border border-border bg-white/85 p-3 shadow-soft">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[28px]">
              <Image
                src={withBasePath(siteConfig.profileImage.src)}
                alt={siteConfig.profileImage.alt}
                fill
                priority
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 520px, 100vw"
                className="object-cover object-[48%_36%]"
              />
            </div>
          </div>

          <div className="mt-6 inline-flex max-w-max items-center gap-2 rounded-full border border-border bg-white/85 px-4 py-2 text-sm font-medium text-muted shadow-soft">
            <span className="h-2.5 w-2.5 rounded-full bg-highlight" />
            {siteConfig.availability}
          </div>

          <h1 className="mt-8 max-w-[11ch] font-display text-5xl font-semibold leading-none tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>

          <p className="mt-5 max-w-2xl text-xl font-semibold text-accent sm:text-2xl">
            {siteConfig.role}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {siteConfig.tagline}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {siteConfig.introduction}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={siteConfig.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {siteConfig.primaryCta.label}
            </a>
            <a
              href={siteConfig.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-border bg-white/70 px-6 py-3.5 text-sm font-semibold text-foreground hover:-translate-y-0.5 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {siteConfig.secondaryCta.label}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-3">
            {prominentLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex items-center rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {link.label}: {link.value}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-w-0">
          <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-highlight-soft blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent-soft blur-3xl" />

          <div className="relative min-w-0 overflow-hidden rounded-[32px] border border-border bg-surface-strong p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="min-w-0 max-w-none">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                {siteConfig.summaryCard.eyebrow}
              </p>
              <p className="mt-3 text-base leading-8 text-muted sm:text-lg">
                {siteConfig.summaryCard.description}
              </p>
            </div>

            <div className="mt-8 grid min-w-0 gap-4 md:grid-cols-2">
              {siteConfig.highlights.map((item) => (
                <div
                  key={item.value}
                  className="min-h-[188px] min-w-0 rounded-[28px] border border-border bg-white/88 p-5 sm:p-6"
                >
                  <p className="min-w-0 break-words [overflow-wrap:anywhere] font-display text-[1.25rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-[1.5rem] xl:text-[1.75rem]">
                    {item.value}
                  </p>
                  <p className="mt-4 min-w-0 break-words text-sm leading-6 text-muted [overflow-wrap:anywhere] sm:text-[0.95rem]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[28px] border border-border bg-background-alt/90 p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                {siteConfig.summaryCard.factsTitle}
              </p>
              <div className="mt-4 grid gap-4">
                {siteConfig.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-[24px] border border-border bg-white/82 p-4"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
