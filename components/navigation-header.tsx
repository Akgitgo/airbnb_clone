'use strict';
import Link from 'next/link';
import { AirbnbLogo } from '@/components/icons';

export function NavigationHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 text-[#FF385C] focus:outline-none">
          <AirbnbLogo className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight text-[#FF385C]">airbnb</span>
        </Link>

        {/* Compact search preview */}
        <div className="flex items-center divide-x divide-gray-200 rounded-full border border-gray-300 py-2.5 pl-5 pr-2 text-sm font-medium shadow-sm transition hover:shadow-md">
          <button className="pr-4 text-gray-900 focus:outline-none hover:text-black">Anywhere</button>
          <button className="px-4 text-gray-900 focus:outline-none hover:text-black">Any week</button>
          <div className="flex items-center gap-3 pl-4">
            <span className="text-gray-500 font-normal">Add guests</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF385C] text-white">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>
        </div>

        {/* User menu / Host profile */}
        <div className="flex items-center gap-3">
          <button className="rounded-full px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100 focus:outline-none">
            Airbnb your home
          </button>
          <button
            aria-label="Language and currency"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100 focus:outline-none"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </button>
          <button className="flex items-center gap-3 rounded-full border border-gray-300 py-1.5 pl-3.5 pr-2 transition hover:shadow-md focus:outline-none">
            <svg className="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-500 text-white font-medium text-xs">
              M
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
