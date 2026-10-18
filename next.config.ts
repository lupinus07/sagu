import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // 상위 폴더(D:\study)의 lockfile/postcss 설정이 섞이지 않게 루트를 고정
  turbopack: { root: path.resolve(__dirname) },
};

export default nextConfig;
