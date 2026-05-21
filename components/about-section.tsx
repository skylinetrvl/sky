"use client";

import { useLanguage } from "@/components/language-context";
import { Award, Users, MapPin, Clock } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();

  const stats = [
    { icon: Clock, value: "10+", label: t.about.experience },
    { icon: Users, value: "5000+", label: t.about.clients },
    { icon: MapPin, value: "100+", label: t.about.destinations },
    { icon: Award, value: "24/7", label: t.about.support },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-primary font-semibold mb-4 tracking-wider uppercase text-sm">
                {t.about.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                {t.about.title}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>

            <div className="space-y-6">
              {/* Mission */}
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t.about.mission}
                </h3>
                <p className="text-muted-foreground">
                  {t.about.missionText}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t.about.vision}
                </h3>
                <p className="text-muted-foreground">
                  {t.about.visionText}
                </p>
              </div>
            </div>
          </div>

          {/* Stats & Image */}
          <div className="space-y-8">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="h-48 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80)",
                  }}
                />
                <div
                  className="h-64 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80)",
                  }}
                />
              </div>
              <div className="space-y-4 pt-8">
                <div
                  className="h-64 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80)",
                  }}
                />
                <div
                  className="h-48 rounded-xl bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=600&q=80)",
                  }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
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
  );
}
