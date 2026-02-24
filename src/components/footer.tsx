import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { businessInfo } from "@/lib/seo-config";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/logo.png"
              alt="Traumplatz Logo"
              width={140}
              height={140}
              className="h-auto w-auto max-w-[140px]"
            />
          </div>

          {/* Traumplatz Address */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 tracking-wide mb-4">
              TRAUMPLATZ
            </h3>
            <p className="text-gray-600 text-sm">
              {businessInfo.address.street}
              <br />
              {businessInfo.address.postalCode} {businessInfo.address.city}
            </p>
          </div>

          {/* Kontaktdaten */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 tracking-wide mb-4">
              KONTAKTDATEN
            </h3>
            <div className="space-y-2">
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 text-sm hover:text-brand-green transition-colors"
              >
                <Phone className="w-4 h-4" />
                {businessInfo.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${businessInfo.contact.email}`}
                className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 text-sm hover:text-brand-green transition-colors"
              >
                <Mail className="w-4 h-4" />
                {businessInfo.contact.email}
              </a>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 tracking-wide mb-4">
              SIE SPRECHEN UNS
            </h3>
            <div className="text-sm space-y-1">
              <div className="flex justify-center sm:justify-start gap-4">
                <span className="text-gray-600">Mo - Sa</span>
                <span className="text-gray-600">7:00 - 20:00</span>
              </div>
              <div className="flex justify-center sm:justify-start gap-4">
                <span className="text-gray-600">Sonntag</span>
                <span className="text-gray-600">Geschlossen</span>
              </div>
              <p className="text-brand-green text-sm pt-1 font-medium">
                24/7 telefonisch erreichbar
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-gray-900 tracking-wide mb-4">
              SOCIAL MEDIA
            </h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="https://instagram.com/traumplatz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-green transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com/@traumplatz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-green transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-center gap-8 md:gap-12">
            <Link
              href="/impressum"
              className="text-brand-green hover:text-brand-green-dark transition-colors font-medium"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-brand-green hover:text-brand-green-dark transition-colors font-medium"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
