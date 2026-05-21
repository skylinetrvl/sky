"use client";

import { useLanguage } from "@/components/language-context";

export default function PrivacyPage() {
  const { language } = useLanguage();

  if (language === "ar") {
    return (
      <div className="pt-20">
        <section className="relative py-24 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">سياسة الخصوصية</h1>
              <p className="text-lg text-background/70">آخر تحديث: يناير 2024</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h2 className="text-2xl font-bold mb-4">مقدمة</h2>
              <p className="text-muted-foreground mb-6">
                تلتزم سكاي لاين بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك الشخصية.
              </p>

              <h2 className="text-2xl font-bold mb-4">المعلومات التي نجمعها</h2>
              <p className="text-muted-foreground mb-6">
                نقوم بجمع المعلومات التي تقدمها لنا مباشرة، مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك ومعلومات السفر عند حجز خدماتنا.
              </p>

              <h2 className="text-2xl font-bold mb-4">كيف نستخدم معلوماتك</h2>
              <p className="text-muted-foreground mb-6">
                نستخدم المعلومات التي نجمعها لمعالجة حجوزاتك، والتواصل معك بشأن خدماتنا، وتحسين عروضنا.
              </p>

              <h2 className="text-2xl font-bold mb-4">حماية البيانات</h2>
              <p className="text-muted-foreground mb-6">
                نطبق إجراءات أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو التدمير.
              </p>

              <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
              <p className="text-muted-foreground">
                إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على info@skylinetrvl.ca
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="relative py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg text-background/70">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Skyline is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We collect information you provide directly to us, such as your name, email address, phone number, and travel information when booking our services.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We use the information we collect to process your bookings, communicate with you about our services, and improve our offerings.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Data Protection</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at info@skylinetrvl.ca
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
