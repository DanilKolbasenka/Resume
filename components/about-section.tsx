import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-4 py-20 sm:scroll-mt-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Обо мне"
          title="Frontend-разработка с фокусом на поддержку, качество и результат."
          description="Для меня важно не просто сделать красивый экран, а собрать интерфейс, который удобно развивать, тестировать и выпускать в прод."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <article className="rounded-[32px] border border-border bg-surface p-6 shadow-soft sm:p-8">
            <div className="space-y-5 text-base leading-8 text-muted">
              {siteConfig.about.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-foreground">
                Сильные стороны
              </h3>
              <ul className="mt-4 space-y-3">
                {siteConfig.about.strengths.map((strength) => (
                  <li
                    key={strength}
                    className="flex gap-3 rounded-2xl border border-border bg-white/85 px-4 py-4 text-sm leading-6 text-muted"
                  >
                    <span
                      className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <div className="grid gap-6">
            {siteConfig.about.focusAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-[28px] border border-border bg-surface-strong p-6 shadow-soft"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {area.title}
                </p>
                <p className="mt-3 text-base leading-7 text-muted">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
