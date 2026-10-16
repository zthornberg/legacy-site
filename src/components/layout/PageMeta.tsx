import { usePageMeta } from '../../lib/seo';

/** Applies the static route title/description on every navigation. Dynamic pages override via usePageMeta. */
export default function PageMeta() {
  usePageMeta();
  return null;
}
