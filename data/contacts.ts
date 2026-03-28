export type ContactLink = {
  label: string;
  value: string;
  href: string;
  description: string;
  icon: "mail" | "github" | "telegram" | "linkedin";
  prominent?: boolean;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Почта",
    value: "maluskoaleksej6@gmail.com",
    href: "mailto:maluskoaleksej6@gmail.com",
    description: "Лучший способ для обсуждения проектов, предложений и полноценной коммуникации.",
    icon: "mail",
    prominent: true,
  },
  {
    label: "GitHub",
    value: "github.com/DanilKolbasenka",
    href: "https://github.com/DanilKolbasenka",
    description: "Репозитории, код, эксперименты и рабочие наработки.",
    icon: "github",
    prominent: true,
  },
  {
    label: "Telegram",
    value: "@BBFN1",
    href: "https://t.me/BBFN1",
    description: "Удобно для быстрых сообщений и короткой координации.",
    icon: "telegram",
  },
];
