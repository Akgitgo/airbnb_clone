import { StarIcon } from '@/components/icons';
import type { Host, Amenity } from '@/lib/listing-data';

interface ListingDetailsProps {
  subtitle: string;
  guestCount: number;
  bedroomCount: number;
  bedCount: number;
  bathroomCount: number;
  badge?: string;
  rating: number;
  reviewCount: number;
  host: Host;
  highlights: {
    icon: string;
    title: string;
    description: string;
  }[];
  description: string[];
  sleepingArrangements: {
    roomName: string;
    bedType: string;
    bedIcon: string;
  }[];
  amenities: Amenity[];
}

export function ListingDetails({
  subtitle,
  guestCount,
  bedroomCount,
  bedCount,
  bathroomCount,
  badge,
  rating,
  reviewCount,
  host,
  highlights,
  description,
  sleepingArrangements,
  amenities,
}: ListingDetailsProps) {
  return (
    <div className="space-y-8 pr-12">
      {/* Basic summary */}
      <div className="border-b border-gray-200 pb-7">
        <h2 className="text-[22px] font-semibold text-gray-900 leading-7">{subtitle}</h2>
        <p className="mt-1 text-[15px] text-gray-700">
          {guestCount} guests · {bedroomCount} bedrooms · {bedCount} beds · {bathroomCount} baths
        </p>
        <div className="mt-2.5 flex items-center gap-2 text-sm font-semibold">
          <StarIcon className="h-4 w-4 text-black" />
          <span>{rating.toFixed(2)}</span>
          <span className="text-gray-400">·</span>
          <a href="#reviews" className="underline hover:text-black">
            {reviewCount} reviews
          </a>
        </div>
      </div>

      {/* Guest Favorite / Rating Trophy Bar */}
      {badge && (
        <div className="flex items-center justify-between rounded-2xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center">
              <span className="text-2xl">🏆</span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-800">Favorite</span>
            </div>
            <div>
              <p className="text-base font-semibold text-gray-900">Guest favorite</p>
              <p className="text-sm text-gray-600">
                One of the most loved homes on Airbnb, according to guests
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8 border-l border-gray-200 pl-8 text-center">
            <div>
              <div className="text-lg font-bold text-gray-900">{rating.toFixed(2)}</div>
              <div className="flex justify-center text-xs text-amber-500">★★★★★</div>
            </div>
            <div className="border-l border-gray-200 pl-8">
              <div className="text-lg font-bold text-gray-900">{reviewCount}</div>
              <div className="text-xs text-gray-500 underline">Reviews</div>
            </div>
          </div>
        </div>
      )}

      {/* Host preview banner */}
      <div className="flex items-center gap-4 border-b border-gray-200 pb-7">
        <img
          src={host.avatarUrl}
          alt={host.name}
          className="h-14 w-14 rounded-full object-cover shadow-sm"
        />
        <div>
          <h3 className="text-base font-semibold text-gray-900">Hosted by {host.name}</h3>
          <p className="text-sm text-gray-500">
            {host.isSuperhost ? 'Superhost · ' : ''}
            {host.yearsHosting} years hosting
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="space-y-6 border-b border-gray-200 pb-7">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="mt-1 text-gray-700">
              {item.icon === 'sparkles' && (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              )}
              {item.icon === 'door' && (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              )}
              {item.icon === 'medal' && (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              )}
              {item.icon === 'calendar' && (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
            </div>
            <div>
              <h4 className="text-[16px] font-semibold text-gray-900">{item.title}</h4>
              <p className="text-[14px] text-gray-500 leading-snug">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="border-b border-gray-200 pb-7">
        <h3 className="mb-4 text-xl font-semibold text-gray-900">About this space</h3>
        <div className="space-y-4 text-base text-gray-700 leading-relaxed">
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Sleeping arrangements */}
      <div className="border-b border-gray-200 pb-7">
        <h3 className="mb-5 text-xl font-semibold text-gray-900">Where you&apos;ll sleep</h3>
        <div className="grid grid-cols-3 gap-4">
          {sleepingArrangements.map((room, index) => (
            <div key={index} className="rounded-xl border border-gray-300 p-5">
              <div className="mb-4 text-gray-800">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M3 14h18M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="font-semibold text-gray-900 text-[15px]">{room.roomName}</div>
              <div className="mt-1 text-sm text-gray-500">{room.bedType}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What this place offers */}
      <div className="border-b border-gray-200 pb-7">
        <h3 className="mb-5 text-xl font-semibold text-gray-900">What this place offers</h3>
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          {amenities.map((item) => (
            <div key={item.id} className="flex items-center gap-4 text-gray-800">
              <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[15px]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
