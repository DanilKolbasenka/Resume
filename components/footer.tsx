import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="px-4 pb-8 pt-2 sm:px-6 sm:pb-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[32px] border border-border bg-surface px-6 py-6 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-foreground">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {siteConfig.role}. Портфолио на Next.js, TypeScript и Tailwind CSS
            со static export для GitHub Pages.
          </p>
        </div>

        <nav className="flex flex-wrap gap-2" aria-label="Навигация в футере">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted hover:bg-white/80 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
