/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', <-- 이 줄을 삭제하거나 주석 처리 해주세요!
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;