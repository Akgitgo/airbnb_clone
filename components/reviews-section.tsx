import { StarIcon } from '@/components/icons';
import type { Review } from '@/lib/listing-data';

interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
  breakdown: {
    cleanliness: number;
    accuracy: number;
    communication: number;
    location: number;
    checkIn: number;
    value: number;
  };
  reviews: Review[];
}

export function ReviewsSection({ rating, reviewCount, breakdown, reviews }: ReviewsSectionProps) {
  const breakdownItems = [
    { label: 'Cleanliness', score: breakdown.cleanliness },
    { label: 'Accuracy', score: breakdown.accuracy },
    { label: 'Communication', score: breakdown.communication },
    { label: 'Location', score: breakdown.location },
    { label: 'Check-in', score: breakdown.checkIn },
    { label: 'Value', score: breakdown.value },
  ];

  return (
    <section id="reviews" className="border-t border-gray-200 py-10">
      {/* Overall score title */}
      <div className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
        <StarIcon className="h-6 w-6 text-black" />
        <span>{rating.toFixed(2)}</span>
        <span className="text-gray-400">·</span>
        <span>{reviewCount} reviews</span>
      </div>

      {/* Score breakdown metrics */}
      <div className="mt-8 grid grid-cols-2 gap-x-20 gap-y-3">
        {breakdownItems.map((item) => (
          <div key={item.label} className="flex items-center justify-between text-sm">
            <span className="text-gray-800">{item.label}</span>
            <div className="flex items-center gap-3">
              <div className="h-1 w-32 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-gray-900"
                  style={{ width: `${(item.score / 5) * 100}%` }}
                />
              </div>
              <span className="w-7 text-right font-semibold text-xs text-gray-900">
                {item.score.toFixed(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Review cards */}
      <div className="mt-10 grid grid-cols-2 gap-x-16 gap-y-10">
        {reviews.map((review) => (
          <article key={review.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={review.author.avatarUrl}
                alt={review.author.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                  {review.author.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {review.author.location} · {review.author.yearsOnAirbnb} years on Airbnb
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <div className="flex text-black">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-3 w-3" />
                ))}
              </div>
              <span className="text-gray-400">·</span>
              <span className="text-gray-600 font-normal">{review.date}</span>
            </div>
            <p className="text-[15px] text-gray-700 leading-relaxed">{review.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
