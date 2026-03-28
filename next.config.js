const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/Resume" : "",
  assetPrefix: isProd ? "/Resume/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
