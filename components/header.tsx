"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { CloseIcon, MenuIcon } from "@/components/icons";

const observedSectionIds = navigationItems.map((item) => item.href.slice(1));
type ObservedSectionId = (typeof observedSectionIds)[number];
const activationOffset = 160;
const scrollOffset = 112;

function isObservedSectionId(value: string): value is ObservedSectionId {
  return observedSectionIds.includes(value as ObservedSectionId);
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function resolveActiveSection(): ObservedSectionId {
  const sections = observedSectionIds
    .map((sectionId) => document.getElementById(sectionId))
    .filter((section): section is HTMLElement => section !== null);

  let currentSectionId = observedSectionIds[0];

  for (const section of sections) {
    const rect = section.getBoundingClientRect();

    if (rect.top <= activationOffset && rect.bottom > activationOffset) {
      return section.id as ObservedSectionId;
    }

    if (rect.top < activationOffset) {
      currentSectionId = section.id as ObservedSectionId;
    }
  }

  return currentSectionId;
}

export function Header() {
  const [activeId, setActiveId] = useState<ObservedSectionId>(observedSectionIds[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const initials = getInitials(siteConfig.name);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    let frameId = 0;

    const syncActiveSection = () => {
      setActiveId(resolveActiveSection());
    };

    const handleScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(syncActiveSection);
    };

    const handleHashChange = () => {
      const hashSectionId = window.location.hash.slice(1);

      if (isObservedSectionId(hashSectionId)) {
        setActiveId(hashSectionId);
        return;
      }

      syncActiveSection();
    };

    frameId = window.requestAnimationFrame(syncActiveSection);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const scrollToPosition = (top: number) => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    const nextId = href.slice(1);

    if (isObservedSectionId(nextId)) {
      event.preventDefault();
      setActiveId(nextId);
      const targetSection = document.getElementById(nextId);

      if (targetSection) {
        const nextTop =
          targetSection.getBoundingClientRect().top + window.scrollY - scrollOffset;

        scrollToPosition(Math.max(0, nextTop));
        window.history.replaceState(null, "", href);
      }
    }

    setIsMenuOpen(false);
  };

  const linkClassName = (href: string) => {
    const isActive = activeId === href.slice(1);

    return [
      "rounded-full px-4 py-2 text-sm font-medium transition",
      isActive
        ? "bg-accent text-white shadow-soft"
        : "text-muted hover:bg-white/80 hover:text-foreground",
    ].join(" ");
  };

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-border bg-surface-strong px-4 py-3 shadow-soft backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="inline-flex items-center gap-3 rounded-full px-2 py-1 text-left hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={(event) => {
              event.preventDefault();
              setActiveId(observedSectionIds[0]);
              setIsMenuOpen(false);
              scrollToPosition(0);
              window.history.replaceState(null, "", "#home");
            }}
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
              {initials}
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground">
                {siteConfig.name}
              </span>
              <span className="block text-xs text-muted">{siteConfig.role}</span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Основная навигация"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkClassName(item.href)}
                aria-current={activeId === item.href.slice(1) ? "page" : undefined}
                onClick={(event) => handleNavigation(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/70 text-foreground md:hidden"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            className="mt-4 grid gap-2 border-t border-border pt-4 md:hidden"
            aria-label="Мобильная навигация"
          >
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={linkClassName(item.href)}
                aria-current={activeId === item.href.slice(1) ? "page" : undefined}
                onClick={(event) => handleNavigation(event, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
