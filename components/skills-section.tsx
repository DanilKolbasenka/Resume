import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 px-4 py-20 sm:scroll-mt-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Навыки"
          title="Стек и рабочие практики, собранные в понятные группы."
          description="Технологии и подходы сгруппированы так, чтобы по ним можно было быстро понять мой профиль без перегруженной стены из бейджей."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-[30px] border border-border bg-surface p-6 shadow-soft sm:p-8"
            >
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
                  {category.description}
                </p>
              </div>

              <ul className="mt-6 flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-white/80 px-4 py-2 text-sm font-medium text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
