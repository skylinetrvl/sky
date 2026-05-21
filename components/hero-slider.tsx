"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useLanguage } from "@/components/language-context";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plane, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/images/mecca.jpg",
    titleEn: "Umrah Packages",
    titleAr: "باقات العمرة",
    subtitleEn: "Experience the spiritual journey of a lifetime to the Holy Land",
    subtitleAr: "عش رحلة روحانية لا تُنسى إلى الأراضي المقدسة",
  },
  {
    id: 2,
    image: "/images/medina.jpg",
    titleEn: "Visit the Prophet's Mosque",
    titleAr: "زيارة المسجد النبوي",
    subtitleEn: "Discover the peace and serenity of Al-Madinah Al-Munawwarah",
    subtitleAr: "اكتشف السكينة والطمأنينة في المدينة المنورة",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80",
    titleEn: "Discover Paradise",
    titleAr: "اكتشف الجنة",
    subtitleEn: "Escape to stunning beaches and crystal-clear waters",
    subtitleAr: "استمتع بالشواطئ الخلابة والمياه الصافية",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80",
    titleEn: "Explore Europe",
    titleAr: "استكشف أوروبا",
    subtitleEn: "Experience the charm of historic cities and cultures",
    subtitleAr: "عش سحر المدن التاريخية والثقافات",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80",
    titleEn: "Adventure Awaits",
    titleAr: "المغامرة تنتظرك",
    subtitleEn: "Journey through breathtaking landscapes",
    subtitleAr: "انطلق في رحلة عبر مناظر طبيعية خلابة",
  },
];

export function HeroSlider() {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: isRTL ? "rtl" : "ltr" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel Container */}
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide relative flex-[0_0_100%] min-w-0"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl space-y-6">
                  <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-6 py-2 rounded-full">
                    <Plane className="w-5 h-5 text-primary" />
                    <span className="text-primary font-medium">Skyline Travel</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                    {language === "ar" ? slide.titleAr : slide.titleEn}
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-pretty">
                    {language === "ar" ? slide.subtitleAr : slide.subtitleEn}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link href="/services">
                      <Button
                        size="lg"
                        className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg px-8 py-6"
                      >
                        {t.hero.cta}
                        <ArrowIcon className="w-5 h-5" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white/50 text-white hover:bg-white/10 text-lg px-8 py-6"
                      >
                        {t.hero.explore}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary/80 text-white flex items-center justify-center transition-all duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary/80 text-white flex items-center justify-center transition-all duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/60 text-sm z-10">
        <span className="writing-vertical-lr rotate-180">{language === "ar" ? "مرر للأسفل" : "Scroll Down"}</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
