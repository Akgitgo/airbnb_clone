'use client';

import { useState } from 'react';
import type { PhotoItem } from '@/lib/listing-data';
import { GridIcon, ShareIcon, HeartIcon } from '@/components/icons';

interface PhotoGalleryProps {
  photos: PhotoItem[];
  title: string;
  onOpenLightbox: (initialIndex: number) => void;
}

export function PhotoGallery({ photos, title, onOpenLightbox }: PhotoGalleryProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [copyNotice, setCopyNotice] = useState(false);

  const mainPhoto = photos[0];
  const secondaryPhotos = photos.slice(1, 5);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopyNotice(true);
    setTimeout(() => setCopyNotice(false), 2000);
  };

  return (
    <section className="pt-6">
      {/* Listing Title & Action Bar */}
      <div className="flex items-start justify-between pb-6">
        <div>
          <h1 className="text-[26px] font-semibold text-gray-900 tracking-tight leading-8">{title}</h1>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-800">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition underline hover:bg-gray-100 focus:outline-none"
          >
            <ShareIcon className="h-4 w-4" />
            <span>{copyNotice ? 'Link copied!' : 'Share'}</span>
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 transition underline hover:bg-gray-100 focus:outline-none"
          >
            <HeartIcon className="h-4 w-4" filled={isSaved} />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* 5-Photo Grid */}
      <div className="relative grid grid-cols-4 grid-rows-2 gap-2 h-[460px] overflow-hidden rounded-2xl">
        {/* Main large photo (col 1-2, row 1-2) */}
        {mainPhoto && (
          <div
            className="group relative col-span-2 row-span-2 cursor-pointer overflow-hidden bg-gray-100"
            onClick={() => onOpenLightbox(0)}
          >
            <img
              src={mainPhoto.url}
              alt={mainPhoto.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        )}

        {/* 4 grid photos */}
        {secondaryPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className="group relative cursor-pointer overflow-hidden bg-gray-100"
            onClick={() => onOpenLightbox(index + 1)}
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        ))}

        {/* "Show all photos" floating button */}
        <button
          onClick={() => onOpenLightbox(0)}
          className="absolute bottom-6 right-6 flex items-center gap-2.5 rounded-lg border border-black bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-md transition hover:bg-gray-50 focus:outline-none"
        >
          <GridIcon className="h-3.5 w-3.5" />
          <span>Show all {photos.length} photos</span>
        </button>
      </div>
    </section>
  );
}
