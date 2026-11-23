import type { SVGProps } from 'react';

export function AirbnbLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.18 12.784 6.643 14.154.551 1.635.823 3.064.823 4.298 0 5.485-4.004 8.254-8.75 8.254-3.136 0-5.748-1.503-7.01-4.048-1.261 2.545-3.873 4.048-7.01 4.048C4.227 32 0 29.231 0 23.746c0-1.234.272-2.663.823-4.298.463-1.37 4.689-10.324 6.643-14.154l.533-1.025C9.287 1.963 10.742 1 12.75 1h3.25zm0 2.2c-.896 0-1.74.526-2.585 2.035l-.478.919C11.139 9.68 7.02 18.397 6.574 19.72c-.443 1.31-.661 2.417-.661 3.326 0 3.754 2.684 5.954 6.067 5.954 2.825 0 4.882-1.928 5.342-4.996a1.1 1.1 0 012.186 0c.46 3.068 2.517 4.996 5.342 4.996 3.383 0 6.067-2.2 6.067-5.954 0-.909-.218-2.016-.661-3.326-.446-1.323-4.565-10.04-6.363-13.566l-.478-.919C20.59 3.726 19.746 3.2 18.85 3.2H16zm0 13.8a4 4 0 110 8 4 4 0 010-8zm0 2.2a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6z" />
    </svg>
  );
}

export function StarIcon({ className = 'w-4 h-4 text-black' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M15.094 1.579l-4.124 8.885-9.76 1.274a1 1 0 00-.56 1.73l7.14 6.78-1.8 9.66a1 1 0 001.467 1.066L16 26.288l8.643 4.686a1 1 0 001.467-1.066l-1.8-9.66 7.14-6.78a1 1 0 00-.56-1.73l-9.76-1.274-4.124-8.885a1 1 0 00-1.812 0z" />
    </svg>
  );
}

export function ShareIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M27 18v8a2 2 0 01-2 2H7a2 2 0 01-2-2V18M16 3v17M11 8l5-5 5 5" />
    </svg>
  );
}

export function HeartIcon({ className = 'w-4 h-4', filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill={filled ? '#FF385C' : 'none'}
      stroke={filled ? '#FF385C' : 'currentColor'}
      strokeWidth="2.5"
    >
      <path d="M16 28C7 23 3 18.2 3 12.2A7.2 7.2 0 0110.2 5c2.4 0 4.5 1.2 5.8 3.1A7.1 7.1 0 0121.8 5 7.2 7.2 0 0129 12.2C29 18.2 25 23 16 28z" />
    </svg>
  );
}

export function GridIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M2 2h3v3H2V2zm0 4.5h3v3H2v-3zm0 4.5h3v3H2v-3zm4.5-9h3v3h-3V2zm0 4.5h3v3h-3v-3zm0 4.5h3v3h-3v-3zm4.5-9h3v3h-3V2zm0 4.5h3v3h-3v-3zm0 4.5h3v3h-3v-3z" />
    </svg>
  );
}

export function CloseIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function ChevronLeftIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export function ChevronRightIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function ChevronDownIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
