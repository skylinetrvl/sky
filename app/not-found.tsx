"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-context";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const { language, t } = useLanguage();
  const ArrowIcon = language === "ar" ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-lg mx-auto space-y-8">
          {/* 404 Number */}
          <div className="relative">
            <span className="text-[150px] md:text-[200px] font-bold text-primary/10 leading-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-bold text-foreground">404</span>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {language === "ar" ? "الصفحة غير موجودة" : "Page Not Found"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {language === "ar"
                ? "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
                : "Sorry, the page you are looking for doesn't exist or has been moved."}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
              >
                <Home className="w-5 h-5" />
                {t.nav.home}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
              >
                {t.nav.contact}
                <ArrowIcon className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
