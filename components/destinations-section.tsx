"use client";

import { useLanguage } from "@/components/language-context";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    nameEn: "Dubai, UAE",
    nameAr: "دبي، الإمارات",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    priceFrom: 899,
  },
  {
    id: 2,
    nameEn: "Paris, France",
    nameAr: "باريس، فرنسا",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    priceFrom: 1299,
  },
  {
    id: 3,
    nameEn: "Istanbul, Turkey",
    nameAr: "إسطنبول، تركيا",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80",
    priceFrom: 799,
  },
  {
    id: 4,
    nameEn: "Maldives",
    nameAr: "جزر المالديف",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
    priceFrom: 1599,
  },
  {
    id: 5,
    nameEn: "Cairo, Egypt",
    nameAr: "القاهرة، مصر",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=600&q=80",
    priceFrom: 699,
  },
  {
    id: 6,
    nameEn: "London, UK",
    nameAr: "لندن، المملكة المتحدة",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
    priceFrom: 1199,
  },
];

export function DestinationsSection() {
  const { language, t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
            {t.destinations.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            {t.destinations.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href="/contact"
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] block"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${destination.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {language === "ar" ? destination.nameAr : destination.nameEn}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-white/70">
                    {language === "ar" ? "من" : "From"}
                  </span>
                  <span className="text-xl font-bold text-primary">
                    ${destination.priceFrom}
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            {t.destinations.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
