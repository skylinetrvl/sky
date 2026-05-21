"use client";

import { useLanguage } from "@/components/language-context";

export default function TermsPage() {
  const { language } = useLanguage();

  if (language === "ar") {
    return (
      <div className="pt-20">
        <section className="relative py-24 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">شروط الخدمة</h1>
              <p className="text-lg text-background/70">آخر تحديث: يناير 2024</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-foreground">القبول بالشروط</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                باستخدام خدمات سكاي لاين، فإنك توافق على الالتزام بشروط الخدمة هذه. يرجى قراءتها بعناية.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-foreground">الحجوزات والإلغاءات</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                تخضع جميع الحجوزات لتوافر الخدمة والتأكيد. قد تنطبق سياسات الإلغاء اعتماداً على نوع الخدمة والمورد.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-foreground">الدفع</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                يجب الدفع الكامل عند تأكيد الحجز ما لم يتم الاتفاق على خلاف ذلك. نقبل طرق الدفع المختلفة.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-foreground">المسؤولية</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                سكاي لاين تعمل كوكيل لمقدمي خدمات السفر المختلفين. نحن لسنا مسؤولين عن الخدمات المقدمة من أطراف ثالثة.
              </p>

              <h2 className="text-2xl font-bold mb-4 text-foreground">اتصل بنا</h2>
              <p className="text-muted-foreground leading-relaxed">
                للاستفسارات حول شروط الخدمة، يرجى الاتصال بنا على info@skylinetrvl.ca
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg text-background/70">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              By using Skyline services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Bookings and Cancellations</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              All bookings are subject to availability and confirmation. Cancellation policies may apply depending on the service type and supplier.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Payment</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Full payment is required upon booking confirmation unless otherwise agreed. We accept various payment methods.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Liability</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Skyline acts as an agent for various travel service providers. We are not responsible for services provided by third parties.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For inquiries about these Terms of Service, please contact us at info@skylinetrvl.ca
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
