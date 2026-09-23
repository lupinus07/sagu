/** Every screen Stitch produced for "AI Saju Fortune App", in flow order. */
import type { ComponentType } from 'react';

import Splash from './Splash';
import Login from './Login';
import LoginSheet from './LoginSheet';
import TermsAgreement from './TermsAgreement';
import SignupComplete from './SignupComplete';
import HomeGuest from './HomeGuest';
import Home from './Home';
import SajuInput from './SajuInput';
import SajuOptions from './SajuOptions';
import SajuResult from './SajuResult';
import DaeunFlow from './DaeunFlow';
import SavedSaju from './SavedSaju';
import AiChat from './AiChat';
import ReportStore from './ReportStore';
import Checkout from './Checkout';
import ReportLoading from './ReportLoading';
import CareerMoveReport from './CareerMoveReport';
import More from './More';
import AccountDelete from './AccountDelete';
import ReportFailed from './ReportFailed';
import NetworkError from './NetworkError';
import NotFound from './NotFound';

export type Screen = { slug: string; title: string; component: ComponentType };

export const screens: Screen[] = [
  { slug: 'splash', title: "스플래시", component: Splash },
  { slug: 'login', title: "로그인", component: Login },
  { slug: 'login-sheet', title: "로그인 바텀시트", component: LoginSheet },
  { slug: 'terms', title: "약관 동의", component: TermsAgreement },
  { slug: 'signup-complete', title: "가입 완료", component: SignupComplete },
  { slug: 'home-guest', title: "홈 (비로그인)", component: HomeGuest },
  { slug: 'home', title: "홈", component: Home },
  { slug: 'saju-input', title: "사주 정보 입력", component: SajuInput },
  { slug: 'saju-options', title: "사주 계산 옵션", component: SajuOptions },
  { slug: 'saju-result', title: "사주 분석 결과", component: SajuResult },
  { slug: 'daeun-flow', title: "대운 흐름 분석", component: DaeunFlow },
  { slug: 'saved-saju', title: "저장된 사주", component: SavedSaju },
  { slug: 'ai-chat', title: "사주 AI 상담", component: AiChat },
  { slug: 'store', title: "프리미엄 리포트 스토어", component: ReportStore },
  { slug: 'checkout', title: "결제하기", component: Checkout },
  { slug: 'report-loading', title: "리포트 생성 중", component: ReportLoading },
  { slug: 'report-career-move', title: "이직운 리포트", component: CareerMoveReport },
  { slug: 'more', title: "더보기", component: More },
  { slug: 'account-delete', title: "회원 탈퇴", component: AccountDelete },
  { slug: 'report-failed', title: "리포트 생성 실패", component: ReportFailed },
  { slug: 'network-error', title: "네트워크 오류", component: NetworkError },
  { slug: 'not-found', title: "페이지를 찾을 수 없음", component: NotFound },
];
