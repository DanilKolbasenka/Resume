import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
      <span className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-muted shadow-soft">
        404
      </span>
      <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Такой страницы не существует.
      </h1>
      <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
        Портфолио собрано как статический сайт, поэтому доступны только явно
        определенные страницы. Вернитесь на главную и продолжите оттуда.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-accent-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        На главную
      </Link>
    </main>
  );
}
