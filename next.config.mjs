/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 이미지 정상적으로 불러올 수 있도록함
  },
  trailingSlash: true,
};

export default nextConfig;
