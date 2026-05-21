"use client";

import { useLanguage } from "@/components/language-context";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Plane } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  const { language, t } = useLanguage();
  const ArrowIcon = language === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Plane className="w-16 h-16 text-primary mx-auto animate-float" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            {t.cta.title}
          </h2>
          <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto text-pretty">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 text-lg px-8 py-6"
              >
                {t.cta.button}
                <ArrowIcon className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="tel:+14373434048">
              <Button
                size="lg"
                variant="outline"
                className="border-background/30 text-background hover:bg-background/10 text-lg px-8 py-6"
              >
                +1 437 343 4048
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
