import { Link } from '@tanstack/react-router';
import { Mail, Phone, MapPin, Clock, Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX, SiYoutube } from 'react-icons/si';
import { businessInfo } from '@/content/business';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'hype-the-gym';

  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-primary">
              {businessInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              Transform your body, transform your life. Join the ultimate fitness community and achieve your dream physique.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <SiYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-muted-foreground transition-colors hover:text-foreground">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/trainers" className="text-muted-foreground transition-colors hover:text-foreground">
                  Our Trainers
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-muted-foreground transition-colors hover:text-foreground">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground transition-colors hover:text-foreground">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {businessInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                  {businessInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Opening Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p className="font-medium">Mon - Fri</p>
                  <p>6:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <p className="font-medium">Sat - Sun</p>
                  <p>7:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© {currentYear} {businessInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
