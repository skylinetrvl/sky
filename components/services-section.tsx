"use client";

import { useLanguage } from "@/components/language-context";
import { Plane, Hotel, FileText, MapPin, Ship, Moon } from "lucide-react";
import Link from "next/link";

const services = [
  {
    key: "flight" as const,
    icon: Plane,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
href="/services"
  },
 {
    key: "umrah" as const,
    icon: Moon,
    image: "/images/mecca.jpg",
 href: "/Umrahpack",
  },
{
    key: "visa" as const,
    icon: FileText,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
href="/services"
  },
  {
    key: "hotel" as const,
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
href="/services"
  },
  
  {
    key: "tour" as const,
    icon: MapPin,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80",
href="/services"
  },
 
  {
    key: "cruise" as const,
    icon: Ship,
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80",
href="/services"
  },
];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
            {t.services.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.services.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const serviceData = t.services[service.key];
            return (
              <Link
                key={service.key}
href={service.href}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden h-full border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
  src={service.image}
  alt={serviceData.title}
  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
/>                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {serviceData.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {serviceData.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
