import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { businessInfo } from '@/content/business';

export default function MapAndContactSection() {
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTQuMyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">Visit Us Today</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Come experience our world-class facilities and meet our expert trainers. We're here to help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="relative h-[400px] overflow-hidden rounded-lg border border-border">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hype The Gym Location"
            />
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[oklch(0.65_0.25_25)]/10 p-3">
                      <MapPin className="h-5 w-5 text-[oklch(0.65_0.25_25)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-sm text-muted-foreground">{businessInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[oklch(0.65_0.25_25)]/10 p-3">
                      <Phone className="h-5 w-5 text-[oklch(0.65_0.25_25)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href={businessInfo.telLink} className="text-sm text-muted-foreground hover:text-foreground">
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[oklch(0.65_0.25_25)]/10 p-3">
                      <Mail className="h-5 w-5 text-[oklch(0.65_0.25_25)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href={`mailto:${businessInfo.email}`} className="text-sm text-muted-foreground hover:text-foreground">
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[oklch(0.65_0.25_25)]/10 p-3">
                      <Clock className="h-5 w-5 text-[oklch(0.65_0.25_25)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Opening Hours</h3>
                      <p className="text-sm text-muted-foreground">{businessInfo.openingHours}</p>
                      <p className="text-sm text-muted-foreground">7 Days a Week</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
