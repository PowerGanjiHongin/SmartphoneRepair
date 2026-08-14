/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub 저장소 이름을 basePath로 지정합니다 (대소문자 정확히 match)
  basePath: '/SmartphoneRepair',
  assetPrefix: '/SmartphoneRepair',
  images: {
    unoptimized: true, // 정적 배포 시 Next 이미지 최적화 에러 방지
  },
};

export default nextConfig;