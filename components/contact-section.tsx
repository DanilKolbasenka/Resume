import { contactLinks } from "@/data/contacts";
import { siteConfig } from "@/data/site";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
} from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

function ContactIcon({ icon }: { icon: (typeof contactLinks)[number]["icon"] }) {
  const className = "h-5 w-5";

  switch (icon) {
    case "mail":
      return <MailIcon className={className} />;
    case "github":
      return <GithubIcon className={className} />;
    case "telegram":
      return <TelegramIcon className={className} />;
    case "linkedin":
      return <LinkedInIcon className={className} />;
    default:
      return null;
  }
}

export function ContactSection() {
  const emailLink =
    contactLinks.find((link) => link.icon === "mail") ?? contactLinks[0];

  return (
    <section
      id="contacts"
      className="scroll-mt-28 px-4 pb-10 pt-20 sm:scroll-mt-32 sm:px-6 sm:pb-12 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
          <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft sm:p-8 lg:p-10">
            <div className="flex h-full flex-col">
              <SectionHeading
                eyebrow={siteConfig.contactSection.eyebrow}
                title={siteConfig.contactSection.title}
                description={siteConfig.contactSection.description}
              />

              <div className="mt-8 flex flex-1 flex-col justify-end">
                <div className="rounded-[28px] border border-border bg-white/85 p-5 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    {siteConfig.contactSection.preferredTitle}
                  </p>
                  <p className="mt-3 text-base leading-8 text-muted">
                    {siteConfig.contactSection.preferredDescription}
                  </p>
                  <a
                    href={emailLink?.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {siteConfig.contactSection.emailCta}
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:h-full lg:grid-rows-3">
            {contactLinks.map((link) => {
              const external = link.href.startsWith("http");

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="group relative flex h-full min-h-[168px] items-start gap-4 rounded-[28px] border border-border bg-surface-strong p-6 pr-16 shadow-soft hover:-translate-y-0.5 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-7 sm:pr-16"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <ContactIcon icon={link.icon} />
                  </span>
                  <span className="min-w-0 flex-1 pt-1">
                    <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                      {link.label}
                    </span>
                    <span className="mt-3 block break-all text-[1.85rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[2rem]">
                      {link.value}
                    </span>
                    <span className="mt-4 block max-w-[38ch] text-sm leading-7 text-muted">
                      {link.description}
                    </span>
                  </span>
                  <ArrowUpRightIcon className="absolute right-6 top-6 h-5 w-5 shrink-0 text-muted transition group-hover:text-accent" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
