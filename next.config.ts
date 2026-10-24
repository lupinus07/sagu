import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // 네트워크 IP(다른 기기·IP 주소)로 접속해도 개발 서버의 JS가 로드되도록 허용
  allowedDevOrigins: ["192.168.56.1"],
  cacheComponents: true,
  partialPrefetching: true,
  // 상위 폴더(D:\study)의 lockfile/postcss 설정이 섞이지 않게 루트를 고정
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
