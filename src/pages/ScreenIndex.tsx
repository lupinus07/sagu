import { Link } from 'react-router-dom';
import { screens } from '../screens/registry';
import { useBodyClass } from '../lib/useBodyClass';

const FRAME_WIDTH = 390;
const FRAME_HEIGHT = 844;
const SCALE = 0.62;

/**
 * Wall of every exported screen, each rendered live in a 390×844 frame — the
 * viewport Stitch designed against — so the build can be compared side by side
 * with the Stitch preview.
 */
export default function ScreenIndex() {
  useBodyClass('bg-surface-container text-on-surface font-body-md min-h-screen');

  return (
    <div className="mx-auto max-w-[1400px] px-margin py-space-xl">
      <header className="mb-space-xl flex flex-col gap-space-xs">
        <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">
          Stitch · AI Saju Fortune App
        </span>
        <h1 className="font-headline-xl text-headline-xl text-primary-container font-serif">
          결 · 내 결을 읽다
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {screens.length}개 화면을 스티치 디자인 그대로 옮긴 결과입니다. 카드를 누르면 해당 화면만
          단독으로 열립니다.
        </p>
      </header>

      <ul className="grid gap-space-lg [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
        {screens.map(({ slug, title }) => (
          <li key={slug} className="flex flex-col gap-space-sm">
            <Link
              to={`/${slug}`}
              className="group relative block overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-shadow hover:shadow-md"
              style={{ height: FRAME_HEIGHT * SCALE }}
            >
              <iframe
                src={`/${slug}`}
                title={title}
                tabIndex={-1}
                loading="lazy"
                className="pointer-events-none origin-top-left border-0"
                style={{
                  width: FRAME_WIDTH,
                  height: FRAME_HEIGHT,
                  transform: `scale(${SCALE})`,
                }}
              />
            </Link>
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-title-md text-title-md text-primary-container font-serif">
                {title}
              </span>
              <code className="font-label-sm text-label-sm text-outline">/{slug}</code>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
