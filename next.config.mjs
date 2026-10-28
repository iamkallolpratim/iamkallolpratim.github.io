/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so GitHub Pages can serve it at https://iamkallolpratim.github.io/
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
