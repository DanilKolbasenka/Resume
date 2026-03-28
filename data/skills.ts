export type SkillCategory = {
  title: string;
  description: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description:
      "Базовые технологии, на которые я опираюсь при разработке интерфейсов.",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "App Router",
      "Static Export",
      "Интеграция REST / GraphQL",
    ],
  },
  {
    title: "UI и стилизация",
    description:
      "Композиция интерфейсов, визуальная аккуратность и поддерживаемая система стилей.",
    items: [
      "Tailwind CSS",
      "Дизайн-системы",
      "Адаптивные layout-решения",
      "CSS-архитектура",
      "Доступные компоненты",
      "Умеренная анимация",
    ],
  },
  {
    title: "Качество",
    description:
      "Практики, которые помогают выпускать интерфейсы стабильно и предсказуемо.",
    items: [
      "Бюджет Lighthouse",
      "Семантический HTML",
      "Клавиатурная навигация",
      "Проверка по WCAG",
      "Smoke-тесты",
      "Код-ревью",
    ],
  },
  {
    title: "Релиз и публикация",
    description:
      "Инструменты и подходы, которые сокращают путь от разработки до публикации.",
    items: [
      "GitHub Actions",
      "Статический хостинг",
      "CI-проверки",
      "Компонентная структура",
      "Контентная модель",
      "Пошаговый рефакторинг",
    ],
  },
];
