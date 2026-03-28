import { siteConfig } from "@/data/site";

const EXTERNAL_PROTOCOL = /^(?:[a-z]+:)?\/\//i;
const DEFAULT_PROD_BASE_PATH = "/Resume";

export const basePath = (() => {
  const configuredValue = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  const value =
    configuredValue ||
    (process.env.NODE_ENV === "production" ? DEFAULT_PROD_BASE_PATH : "");

  if (!value || value === "/") {
    return "";
  }

  return value.startsWith("/") ? value.replace(/\/$/, "") : `/${value}`;
})();

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  siteConfig.seo.siteUrl).replace(/\/$/, "");

export function withBasePath(path: string) {
  if (!path || EXTERNAL_PROTOCOL.test(path) || path.startsWith("#")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

export function absoluteUrl(path = "/") {
  if (EXTERNAL_PROTOCOL.test(path)) {
    return path;
  }

  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}
