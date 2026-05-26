"use client";

import { useLanguage } from "@/components/language-context";
import { Plane, Hotel, FileText, MapPin, Ship, CheckCircle, Moon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";


const servicesData = [
  {
    key: "flight" as const,
    icon: Plane,
    features: [
      { en: "Domestic & International Flights", ar: "رحلات داخلية ودولية" },
      { en: "Best Price Guarantee", ar: "ضمان أفضل الأسعار" },
      { en: "Flexible Booking Options", ar: "خيارات حجز مرنة" },
      { en: "24/7 Customer Support", ar: "دعم على مدار الساعة" },
    ],
  },
  {
    key: "hotel" as const,
    icon: Hotel,
    features: [
      { en: "Luxury & Budget Options", ar: "خيارات فاخرة واقتصادية" },
      { en: "Verified Reviews", ar: "تقييمات موثوقة" },
      { en: "Free Cancellation Available", ar: "إلغاء مجاني متاح" },
      { en: "Exclusive Deals", ar: "عروض حصرية" },
    ],
  },
  {
    key: "visa" as const,
    icon: FileText,
    features: [
      { en: "Expert Documentation", ar: "توثيق متخصص" },
      { en: "Fast Processing", ar: "معالجة سريعة" },
      { en: "Multiple Countries", ar: "دول متعددة" },
      { en: "High Success Rate", ar: "نسبة نجاح عالية" },
    ],
  },
  {
    key: "tour" as const,
    icon: MapPin,
    features: [
      { en: "Customized Packages", ar: "باقات مخصصة" },
      { en: "Group & Private Tours", ar: "جولات جماعية وخاصة" },
      { en: "Expert Local Guides", ar: "مرشدين محليين خبراء" },
      { en: "All-Inclusive Options", ar: "خيارات شاملة" },
    ],
  },
  {
    key: "umrah" as const,
    icon: Moon,
    features: [
      { en: "Complete Umrah Packages", ar: "باقات عمرة متكاملة" },
      { en: "5-Star Hotels near Haram", ar: "فنادق 5 نجوم قرب الحرم" },
      { en: "Guided Spiritual Tours", ar: "جولات روحانية مرشدة" },
      { en: "Visa Processing Included", ar: "معالجة التأشيرة مشمولة" },
    ],
  },
  {
    key: "cruise" as const,
    icon: Ship,
    features: [
      { en: "Luxury Cruise Lines", ar: "خطوط كروز فاخرة" },
      { en: "All-Inclusive Packages", ar: "باقات شاملة" },
      { en: "Multiple Destinations", ar: "وجهات متعددة" },
      { en: "Onboard Activities", ar: "أنشطة على متن السفينة" },
    ],
  },
];

export default function ServicesPage() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-26">
      {/* Hero Section */}
      <section className="relative py-24 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80)",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                   {language === "ar" ? "باقات العمرة" : "Umrah Packages"}
            </h1>
            <p className="text-lg md:text-xl text-background/70 text-pretty">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>


{/* Coming Soon Section */}
<section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div
        className="rounded-3xl overflow-hidden mb-10 aspect-[16/9] bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage: "url('/images/mecca.jpg')",
        }}
      />

      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        {language === "ar"
          ? "سوف تتوفر باقات العمرة قريباً"
          : "Umrah Packages Coming Soon"}
      </h2>

      <p className="text-lg text-muted-foreground">
        {language === "ar"
          ? "نعمل حالياً على تجهيز باقات عمرة مميزة بخيارات تناسب جميع الاحتياجات."
          : "We are currently preparing premium Umrah packages tailored to different needs."}
      </p>
    </div>
  </div>
</section>

      {/* Services List */} {/*
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              const serviceData = t.services[service.key];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.key}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {serviceData.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {serviceData.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                          <span className="text-foreground">
                            {language === "ar" ? feature.ar : feature.en}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                        {language === "ar" ? "احجز الآن" : "Book Now"}
                      </Button>
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={`${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${getServiceImage(service.key)})`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
*/}





      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              {language === "ar" ? "لم تجد ما تبحث عنه؟" : "Can't find what you're looking for?"}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {language === "ar"
                ? "تواصل معنا وسنساعدك في إنشاء باقة سفر مخصصة تناسب احتياجاتك."
                : "Contact us and we'll help you create a custom travel package tailored to your needs."}
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {t.nav.contact}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function getServiceImage(key: string): string {
  const images: Record<string, string> = {
    flight: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    hotel: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    visa: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    tour: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    umrah: "/images/mecca.jpg",
    cruise: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80",
  };
  return images[key] || images.flight;
}
