export type Project = {
  title: string;
  description: string;
  stack: string[];
  image: string;
  imageAlt: string;
  demoUrl?: string;
  codeUrl?: string;
  impact: string;
};

export const projects: Project[] = [
  {
    title: "Платформа электронной коммерции",
    description:
      "Концепт витрины интернет-магазина с упором на высокую скорость загрузки, удобную навигацию и аккуратную подачу контента.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS"],
    image: "/projects/pulse-commerce.svg",
    imageAlt:
      "Абстрактное превью интернет-магазина с карточками товаров, навигацией и call-to-action блоками.",
    impact:
      "Подходит для кейса о производительности, удобстве контентного управления и чистой структуре frontend-части.",
  },
  {
    title: "Панель мониторинга",
    description:
      "Концепт dashboard-интерфейса для мониторинга метрик, рабочих процессов и состояния продукта в одном экране.",
    stack: ["Next.js", "TypeScript", "Charts", "Accessible Data Views"],
    image: "/projects/opsboard.svg",
    imageAlt:
      "Превью панели мониторинга с графиками, KPI-карточками и блоком последних событий на темной панели.",
    impact:
      "Показывает умение работать с плотными интерфейсами, иерархией данных и адаптацией сложных экранов под mobile.",
  },
  {
    title: "Библиотека компонентов",
    description:
      "Концепт витрины компонентов и документации для дизайн-системы с переиспользуемыми UI-элементами и понятными правилами использования.",
    stack: ["React", "TypeScript", "Storybook", "Design Tokens"],
    image: "/projects/atlas-ui.svg",
    imageAlt:
      "Превью дизайн-системы с карточками компонентов, типографикой и цветовыми токенами.",
    impact:
      "Хороший формат для демонстрации системного подхода к компонентам, токенам и документации интерфейса.",
  },
];
