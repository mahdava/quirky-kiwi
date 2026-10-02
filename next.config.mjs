/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages, served from main:/docs at /quirky-kiwi.
  output: "export",
  basePath: "/quirky-kiwi",
  distDir: "docs",
};

export default nextConfig;
