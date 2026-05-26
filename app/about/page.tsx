"use client";

import { useLanguage } from "@/components/language-context";
import { Award, Users, MapPin, Clock, Target, Eye, Heart, Sparkles } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  const stats = [
    { icon: Clock, value: "10+", label: t.about.experience },
    { icon: Users, value: "35000+", label: t.about.clients },
    { icon: MapPin, value: "180+", label: t.about.destinations },
    { icon: Award, value: "24/7", label: t.about.support },
  ];

  const values = [
    {
      icon: Sparkles,
      titleEn: "Excellence",
      titleAr: "التميز",
      descEn: "We strive for excellence in every service we provide.",
      descAr: "نسعى للتميز في كل خدمة نقدمها.",
    },
    {
      icon: Heart,
      titleEn: "Integrity",
      titleAr: "النزاهة",
      descEn: "Honesty and transparency are at the core of our business.",
      descAr: "الصدق والشفافية في صميم أعمالنا.",
    },
    {
      icon: Users,
      titleEn: "Customer Focus",
      titleAr: "التركيز على العملاء",
      descEn: "Your satisfaction is our top priority.",
      descAr: "رضاكم هو أولويتنا القصوى.",
    },
    {
      icon: Target,
      titleEn: "Innovation",
      titleAr: "الابتكار",
      descEn: "We continuously improve and innovate our services.",
      descAr: "نعمل باستمرار على تحسين وابتكار خدماتنا.",
    },
  ];

  const { language } = useLanguage();

  return (
    <div className="pt-26">
      {/* Hero Section */}
      <section className="relative py-24 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80)",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {t.about.title}
            </h1>
            <p className="text-lg md:text-xl text-background/70 text-pretty">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="h-48 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80)",
                  }}
                />
                <div
                  className="h-64 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80)",
                  }}
                />
              </div>
              <div className="space-y-4 pt-8">
                <div
                  className="h-64 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80)",
                  }}
                />
                <div
                  className="h-48 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80)",
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
                  {language === "ar" ? "قصتنا" : "Our Story"}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  {language === "ar" ? "شريكك الموثوق للسفر منذ أكثر من 10 سنوات" : "Your Trusted Travel Partner for Over 10 Years"}
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-secondary rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                    >
                      <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t.about.mission}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t.about.vision}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.visionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
              {language === "ar" ? "ما يميزنا" : "What Sets Us Apart"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              {t.about.values}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-secondary hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {language === "ar" ? value.titleAr : value.titleEn}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === "ar" ? value.descAr : value.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

{/* Partners Section */}
<section className="py-20 bg-secondary overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
        {language === "ar" ? "الثقة العالمية" : "Global Trust"}
      </span>

      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        {language === "ar"
          ? "شركاؤنا في النجاح"
          : "Our Partners in Success"}
      </h2>

      <p className="text-muted-foreground text-lg">
        {language === "ar"
          ? "نتعاون مع أبرز شركات الطيران العالمية لتقديم أفضل خيارات السفر لعملائنا."
          : "We collaborate with leading international airlines to provide the best travel experience for our clients."}
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
   {[
{ name: "Qatar Airways", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Qatar_Airways_Logo.svg" },
  { name: "Air Canada", domain: "aircanada.com" },
  { name: "EgyptAir", domain: "egyptair.com" },
  { name: "Royal Jordanian", domain: "rj.com" },
  { name: "Yemenia", domain: "yemenia.com" },
  { name: "Flyadeal", domain: "flyadeal.com" },
  { name: "Saudia", domain: "saudia.com" },
  { name: "Emirates", domain: "emirates.com" },
  { name: "Lufthansa", domain: "lufthansa.com" },
  { name: "PIA", domain: "piac.com.pk" },
  { name: "Turkish Airlines", domain: "turkishairlines.com" },
  { name: "British Airways", domain: "britishairways.com" },
  { name: "KLM", domain: "klm.com" },
  { name: "Air France", domain: "airfrance.com" },
  { name: "Etihad Airways", domain: "etihad.com" },
  { name: "United Airlines", domain: "united.com" },
  { name: "American Airlines", domain: "aa.com" },
  { name: "Delta Air Lines", domain: "delta.com" },
  { name: "Swiss", domain: "swiss.com" },
  { name: "Porter Airlines", domain: "flyporter.com" },
].map((airline, index) => (
  <div
    key={index}
    className="bg-white rounded-2xl p-6 h-32 flex flex-col items-center justify-center gap-3 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
  >
    <img
  src={airline.logo || `https://www.google.com/s2/favicons?sz=128&domain_url=${airline.domain}`}
  alt={airline.name}
  className="max-h-14 max-w-[160px] object-contain"
/>
    <span className="text-sm font-semibold text-black text-center">
      {airline.name}
    </span>
  </div>


))}
    </div>
  </div>
</section>
    </div>
  );
}
