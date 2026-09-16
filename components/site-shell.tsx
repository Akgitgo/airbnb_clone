import type { ReactNode } from 'react';

type SiteShellProps = Readonly<{
  children: ReactNode;
}>;

export function SiteShell({ children }: SiteShellProps) {
  return <main className="min-w-[1280px] bg-white text-ink">{children}</main>;
}
