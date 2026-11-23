'use client';

import { useState } from 'react';
import { mockListing } from '@/lib/listing-data';
import { NavigationHeader } from '@/components/navigation-header';
import { PhotoGallery } from '@/components/photo-gallery';
import { ListingDetails } from '@/components/listing-details';
import { ReservationCard } from '@/components/reservation-card';
import { ReviewsSection } from '@/components/reviews-section';
import { PhotoLightbox } from '@/components/photo-lightbox';
import { SiteFooter } from '@/components/site-footer';

export default function ListingPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-ink">
      {/* Navigation Bar */}
      <NavigationHeader />

      {/* Main Content Area */}
      <main className="mx-auto max-w-[1280px] px-8">
        {/* Photo Gallery Grid */}
        <PhotoGallery
          photos={mockListing.photos}
          title={mockListing.title}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Two-Column Details and Reservation section */}
        <div className="mt-8 flex items-start justify-between pb-12">
          {/* Left Column: Details, Highlights, Description, Amenities */}
          <div className="w-[62%]">
            <ListingDetails
              subtitle={mockListing.subtitle}
              guestCount={mockListing.guestCount}
              bedroomCount={mockListing.bedroomCount}
              bedCount={mockListing.bedCount}
              bathroomCount={mockListing.bathroomCount}
              badge={mockListing.badge}
              rating={mockListing.rating}
              reviewCount={mockListing.reviewCount}
              host={mockListing.host}
              highlights={mockListing.highlights}
              description={mockListing.description}
              sleepingArrangements={mockListing.sleepingArrangements}
              amenities={mockListing.amenities}
            />
          </div>

          {/* Right Column: Sticky Reservation Card */}
          <div className="w-[38%] flex justify-end">
            <ReservationCard
              pricePerNight={mockListing.pricePerNight}
              rating={mockListing.rating}
              reviewCount={mockListing.reviewCount}
              cleaningFee={mockListing.cleaningFee}
              serviceFee={mockListing.serviceFee}
              maxGuests={mockListing.guestCount}
            />
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewsSection
          rating={mockListing.rating}
          reviewCount={mockListing.reviewCount}
          breakdown={mockListing.ratingsBreakdown}
          reviews={mockListing.reviews}
        />
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Fullscreen Photo Lightbox Tour */}
      <PhotoLightbox
        photos={mockListing.photos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        onSelectIndex={setLightboxIndex}
      />
    </div>
  );
}
