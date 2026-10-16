import { useEffect, useState } from 'react';
import { cn } from '../../lib/utils';
import type { PortraitFocus } from '../../data/team';

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const a = parts[0]?.[0] ?? '';
  const b = parts[1]?.[0] ?? '';
  return (a + b).toUpperCase();
}

/**
 * Team headshot. `portrait` (default) is a 4:5 frame with a hairline and 12px radius;
 * `circle` is for small inline avatars. Size it with `className` (width); height follows the aspect.
 * Falls back to serif initials when the image is missing or fails to load.
 */
export default function TeamAvatar({
  name,
  src,
  shape = 'portrait',
  focus,
  className,
  decorative = false,
  priority = false,
}: {
  name: string;
  src?: string;
  shape?: 'portrait' | 'circle';
  focus?: PortraitFocus;
  className?: string;
  /** Hide from assistive tech when the name is already printed next to the image. */
  decorative?: boolean;
  /** Load eagerly (above the fold). */
  priority?: boolean;
}) {
  const [error, setError] = useState(false);
  useEffect(() => setError(false), [src]);
  const portrait = shape === 'portrait';
  const showImage = Boolean(src) && !error;
  const zoom = focus?.zoom ?? 1;

  return (
    <div
      className={cn(
        'relative isolate overflow-hidden border border-line bg-paper-deep',
        portrait ? 'aspect-[4/5] w-full rounded-xl' : 'aspect-square h-12 w-12 shrink-0 rounded-full',
        className
      )}
    >
      {showImage ? (
        <img
          src={src}
          alt={decorative ? '' : `Portrait of ${name}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          draggable={false}
          onError={() => setError(true)}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: focus?.position ?? '50% 30%',
            transform: zoom !== 1 ? `scale(${zoom})` : undefined,
            transformOrigin: focus?.origin ?? focus?.position ?? '50% 30%',
          }}
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          role={decorative ? undefined : 'img'}
          aria-label={decorative ? undefined : name}
          aria-hidden={decorative || undefined}
        >
          <span
            className={cn(
              'select-none text-mute-strong',
              portrait ? 'font-display text-display-lg' : 'text-[13px] font-medium tracking-wide'
            )}
          >
            {initials(name)}
          </span>
        </div>
      )}
    </div>
  );
}
