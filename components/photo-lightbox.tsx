'use client';

import { useEffect, useCallback } from 'react';
import type { PhotoItem } from '@/lib/listing-data';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon, ShareIcon } from '@/components/icons';

interface PhotoLightboxProps {
  photos: PhotoItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function PhotoLightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}: PhotoLightboxProps) {
  const currentPhoto = photos[currentIndex];

  const handleNext = useCallback(() => {
    onSelectIndex((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onSelectIndex]);

  const handlePrev = useCallback(() => {
    onSelectIndex((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-white text-gray-900 animate-in fade-in duration-200"
    >
      {/* Lightbox header bar */}
      <div className="flex h-16 items-center justify-between px-8 border-b border-gray-100">
        <button
          onClick={onClose}
          aria-label="Close photo tour"
          className="flex items-center gap-2 rounded-full p-2 hover:bg-gray-100 transition focus:outline-none"
        >
          <CloseIcon className="h-5 w-5" />
          <span className="text-sm font-medium">Close</span>
        </button>
        <span className="text-sm font-semibold">
          {currentIndex + 1} / {photos.length}
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            aria-label="Share photo"
            className="flex items-center gap-1.5 rounded-full p-2 hover:bg-gray-100 transition focus:outline-none text-sm"
          >
            <ShareIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main photo view with next/prev buttons */}
      <div className="relative flex flex-1 items-center justify-center p-8 overflow-hidden bg-white">
        {/* Prev button */}
        <button
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white/90 shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white focus:outline-none"
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        {/* Current Image */}
        <div className="flex h-full max-h-[75vh] max-w-[1100px] flex-col items-center justify-center">
          <img
            src={currentPhoto.url}
            alt={currentPhoto.alt}
            className="h-full w-full object-contain rounded-lg"
          />
        </div>

        {/* Next button */}
        <button
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white/90 shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white focus:outline-none"
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Lightbox footer & caption */}
      <div className="flex flex-col items-center justify-center pb-6 pt-2 text-center">
        <p className="text-sm font-medium text-gray-800">{currentPhoto.caption}</p>
        <p className="text-xs text-gray-500 mt-1">{currentPhoto.category}</p>
      </div>
    </div>
  );
}
