import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

// Teach tailwind-merge about the custom font-size tokens in tailwind.config.js.
// Without this, `text-display-lg` is treated as a text *color* and gets dropped
// whenever a real color (`text-ink`, `text-mute`, …) appears later in the same cn() call.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: ['display-2xl', 'display-xl', 'display-lg', 'display-md', 'display-sm', 'lede', 'lede-lg', 'eyebrow', 'h1', 'h2'],
        },
      ],
      shadow: [{ shadow: ['card', 'lift', 'pop', 'glass'] }],
      'max-w': [{ 'max-w': ['container', 'wide', 'prose', '8xl', '9xl'] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
