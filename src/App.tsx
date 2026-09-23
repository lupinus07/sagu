import { Route, Routes } from 'react-router-dom';
import { screens } from './screens/registry';
import NotFound from './screens/NotFound';
import ScreenIndex from './pages/ScreenIndex';

/**
 * Every Stitch screen is mounted at its own route. Nothing links the screens
 * together yet — the export has `href="#"` everywhere — so `/` is the gallery.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ScreenIndex />} />
      {screens.map(({ slug, component: Screen }) => (
        <Route key={slug} path={`/${slug}`} element={<Screen />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
