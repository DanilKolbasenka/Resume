import Image from "next/image";
import { ArrowUpRightIcon, GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 px-4 py-20 sm:scroll-mt-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Проекты"
          title="Подборка проектных направлений и кейсов."
          description="Ниже собраны примеры того, с какими типами интерфейсов и задач я работаю. При необходимости их легко заменить на реальные проекты."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[32px] border border-border bg-surface shadow-soft"
            >
              <div className="aspect-[4/3] overflow-hidden border-b border-border bg-stone-950/95">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={960}
                  height={720}
                  unoptimized
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {project.description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-white/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 rounded-2xl border border-border bg-white/80 px-4 py-4 text-sm leading-6 text-muted">
                  {project.impact}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.codeUrl ? (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Код
                    </a>
                  ) : null}

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      Демо
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </a>
                  ) : null}

                  {!project.codeUrl && !project.demoUrl ? (
                    <span className="inline-flex items-center rounded-full border border-dashed border-border px-4 py-2.5 text-sm font-medium text-muted">
                      Ссылки на кейс будут добавлены отдельно
                    </span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
