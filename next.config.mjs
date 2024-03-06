/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/sslog",
  images: {
    unoptimized: true, // 이미지 정상적으로 불러올 수 있도록함
  },
};

export default nextConfig;
