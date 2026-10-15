import { useLocation } from 'react-router-dom';
import { usePageMeta } from '../../lib/seo';

/** Applies the static route title/description on every navigation. Dynamic pages override via usePageMeta. */
export default function PageMeta() {
  const { pathname } = useLocation();
  usePageMeta(undefined, undefined, pathname);
  return null;
}
