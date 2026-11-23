export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50 py-10 text-sm text-gray-600">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="grid grid-cols-4 gap-8 pb-10 border-b border-gray-200">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Support</h5>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Hosting</h5>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Airbnb</h5>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Gift cards</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Location & Environment</h5>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              Nestled sustainably in the Big Sur coastal redwoods. All stays offset 100% of carbon emissions.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>English (US)</span>
              <span>·</span>
              <span>$ USD</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>© 2026 Airbnb, Inc. · Clone Recreation for Demo</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
          <div className="flex items-center gap-4">
            <span>Desktop 1280px+ Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
