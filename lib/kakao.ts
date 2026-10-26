// 카카오 JavaScript SDK (카카오톡 공유). 브라우저에서만 쓴다.
// 필요: 카카오 개발자 콘솔 > 앱 > 플랫폼 키의 JavaScript 키 → NEXT_PUBLIC_KAKAO_JS_KEY,
//       같은 화면의 JavaScript SDK 도메인에 서비스 주소 등록 (카카오톡 공유는 등록된 도메인에서만 동작한다).
const SDK_URL = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js";
const JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;

type FeedLink = { mobileWebUrl: string; webUrl: string };
export type KakaoSdk = {
  isInitialized(): boolean;
  init(key: string): void;
  Share: {
    sendDefault(options: {
      objectType: "feed";
      content: {
        title: string;
        description: string;
        imageUrl: string;
        imageWidth: number;
        imageHeight: number;
        link: FeedLink;
      };
      buttons: { title: string; link: FeedLink }[];
    }): void;
  };
};

declare global {
  interface Window {
    Kakao?: KakaoSdk;
  }
}

export const kakaoAvailable = !!JS_KEY;

let loading: Promise<KakaoSdk | null> | null = null;

/** SDK 를 한 번만 불러와 초기화한다. 키가 없거나 불러오지 못하면 null (호출한 쪽이 다른 공유 방법으로 넘어간다). */
export function loadKakao(): Promise<KakaoSdk | null> {
  if (!JS_KEY || typeof window === "undefined") return Promise.resolve(null);
  loading ??= new Promise<KakaoSdk | null>((resolve) => {
    const done = () => {
      const k = window.Kakao;
      if (!k) return resolve(null);
      if (!k.isInitialized()) k.init(JS_KEY);
      resolve(k);
    };
    if (window.Kakao) return done();
    const s = document.createElement("script");
    s.src = SDK_URL;
    s.async = true;
    s.onload = done;
    s.onerror = () => {
      loading = null; // 다음 시도에서 다시 불러온다
      resolve(null);
    };
    document.head.appendChild(s);
  });
  return loading;
}
