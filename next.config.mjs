/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const nextConfig = {
  output: "export",
  assetPrefix: !debug ? '/sslog/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;

export default nextConfig;
