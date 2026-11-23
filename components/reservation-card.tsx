'use client';

import { useState } from 'react';
import { StarIcon } from '@/components/icons';

interface ReservationCardProps {
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  cleaningFee: number;
  serviceFee: number;
  maxGuests: number;
}

export function ReservationCard({
  pricePerNight,
  rating,
  reviewCount,
  cleaningFee,
  serviceFee,
  maxGuests,
}: ReservationCardProps) {
  const [checkIn, setCheckIn] = useState('2026-12-05');
  const [checkOut, setCheckOut] = useState('2026-12-10');
  const [guestCount, setGuestCount] = useState(2);
  const [isBooked, setIsBooked] = useState(false);

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(0, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

  const basePrice = pricePerNight * nights;
  const total = basePrice + cleaningFee + serviceFee;

  const handleReserve = () => {
    setIsBooked(true);
  };

  return (
    <aside className="sticky top-28 w-full max-w-[370px]">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
        {/* Price header */}
        <div className="flex items-baseline justify-between pb-5">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">${pricePerNight}</span>
            <span className="text-gray-500 font-normal">night</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
            <StarIcon className="h-3.5 w-3.5" />
            <span>{rating.toFixed(2)}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500 underline font-normal">{reviewCount} reviews</span>
          </div>
        </div>

        {/* Date and Guests picker form */}
        <div className="overflow-hidden rounded-xl border border-gray-400 text-xs">
          <div className="grid grid-cols-2 divide-x divide-gray-400 border-b border-gray-400">
            <label className="flex flex-col p-2.5 cursor-pointer bg-white hover:bg-gray-50">
              <span className="font-bold uppercase text-[10px] text-gray-800">Check-in</span>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="mt-0.5 border-none p-0 text-sm font-medium focus:ring-0 outline-none bg-transparent"
              />
            </label>
            <label className="flex flex-col p-2.5 cursor-pointer bg-white hover:bg-gray-50">
              <span className="font-bold uppercase text-[10px] text-gray-800">Checkout</span>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="mt-0.5 border-none p-0 text-sm font-medium focus:ring-0 outline-none bg-transparent"
              />
            </label>
          </div>
          <div className="p-2.5 bg-white">
            <label className="flex flex-col cursor-pointer">
              <span className="font-bold uppercase text-[10px] text-gray-800">Guests</span>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="mt-0.5 w-full bg-transparent border-none p-0 text-sm font-medium focus:ring-0 outline-none"
              >
                {Array.from({ length: maxGuests }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {/* Reserve CTA */}
        <button
          onClick={handleReserve}
          className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#FF385C] to-[#E00B41] py-3 text-center text-base font-semibold text-white shadow-md transition hover:opacity-95 active:scale-[0.99] focus:outline-none"
        >
          {isBooked ? 'Reservation confirmed! 🎉' : 'Reserve'}
        </button>

        <p className="mt-3 text-center text-xs text-gray-500">You won&apos;t be charged yet</p>

        {/* Price breakdown */}
        <div className="mt-5 space-y-3 text-sm text-gray-600 border-b border-gray-200 pb-5">
          <div className="flex justify-between">
            <span className="underline">
              ${pricePerNight} × {nights} nights
            </span>
            <span>${basePrice}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Cleaning fee</span>
            <span>${cleaningFee}</span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Airbnb service fee</span>
            <span>${serviceFee}</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between pt-4 text-base font-bold text-gray-900">
          <span>Total before taxes</span>
          <span>${total}</span>
        </div>
      </div>
    </aside>
  );
}
