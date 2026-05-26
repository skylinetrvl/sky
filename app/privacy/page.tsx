"use client";

import { useLanguage } from "@/components/language-context";

export default function PrivacyPage() {
  const { language } = useLanguage();

  if (language === "ar") {
    return (
      <div className="pt-26">
        {/* Hero */}
        <section className="relative py-24 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                سياسة الخصوصية
              </h1>

              <p className="text-lg text-background/70">
                آخر تحديث: مايو 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  مقدمة
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  تلتزم سكاي لاين للسفر والسياحة بحماية خصوصية عملائنا
                  والحفاظ على سرية المعلومات الشخصية التي يتم جمعها أثناء
                  استخدام موقعنا أو خدماتنا. توضح هذه السياسة كيفية جمع
                  المعلومات واستخدامها وحمايتها وفقاً للقوانين المعمول بها
                  في مقاطعة أونتاريو وكندا.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  المعلومات التي نقوم بجمعها
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  قد نقوم بجمع المعلومات التالية:
                </p>

                <ul className="space-y-3 text-muted-foreground list-disc pr-6">
                  <li>الاسم الكامل ومعلومات التواصل.</li>
                  <li>رقم الهاتف والبريد الإلكتروني.</li>
                  <li>بيانات جواز السفر أو التأشيرات عند الحاجة للحجز.</li>
                  <li>تفاصيل الرحلات والحجوزات.</li>
                  <li>المعلومات المتعلقة بالدفع والفواتير.</li>
                  <li>أي معلومات يرسلها العميل عبر نماذج التواصل.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  كيفية استخدام المعلومات
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  نستخدم المعلومات التي نجمعها للأغراض التالية:
                </p>

                <ul className="space-y-3 text-muted-foreground list-disc pr-6">
                  <li>إتمام الحجوزات وإصدار التذاكر.</li>
                  <li>تأكيد الحجوزات والتواصل مع العملاء.</li>
                  <li>تقديم خدمات الفنادق والعمرة والتأشيرات.</li>
                  <li>إرسال التحديثات المتعلقة بالرحلات.</li>
                  <li>تحسين جودة خدماتنا وتجربة المستخدم.</li>
                  <li>الامتثال للمتطلبات القانونية والتنظيمية.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  مشاركة المعلومات مع الجهات الخارجية
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  قد تتم مشاركة البيانات الضرورية مع شركات الطيران والفنادق
                  ومقدمي خدمات السفر وشركات التأمين والجهات الحكومية عند
                  الحاجة لإتمام الحجوزات أو إصدار التأشيرات أو الامتثال
                  للمتطلبات القانونية. نحن لا نقوم ببيع المعلومات الشخصية
                  لأي طرف ثالث.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  حماية المعلومات
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  نتخذ إجراءات أمنية وتقنية مناسبة لحماية بيانات العملاء من
                  الوصول غير المصرح به أو التعديل أو الإفصاح أو الفقدان،
                  ونستخدم أنظمة آمنة لمعالجة البيانات والحجوزات.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  ملفات تعريف الارتباط (Cookies)
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة
                  المستخدم وتحليل أداء الموقع وتخصيص المحتوى والخدمات.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  حقوق العميل
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  يحق للعملاء:
                </p>

                <ul className="space-y-3 text-muted-foreground list-disc pr-6">
                  <li>طلب الوصول إلى بياناتهم الشخصية.</li>
                  <li>طلب تعديل أو تحديث المعلومات.</li>
                  <li>طلب حذف البيانات ضمن الحدود القانونية.</li>
                  <li>إلغاء الاشتراك من الرسائل التسويقية.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  الامتثال والتنظيم
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  تعمل سكاي لاين وفق القوانين واللوائح المعمول بها في
                  مقاطعة أونتاريو وكندا، وتسعى للالتزام بالممارسات المهنية
                  المعتمدة في قطاع السفر والسياحة.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  التواصل معنا
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  إذا كانت لديك أي أسئلة بخصوص سياسة الخصوصية أو طريقة
                  التعامل مع بياناتك، يرجى التواصل معنا عبر:
                </p>

                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p>البريد الإلكتروني: info@skylinetrvl.ca</p>
                  <p>الهاتف: +1 437 343 4048</p>
                  <p>ميسيساغا، أونتاريو، كندا</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-26">
      {/* Hero */}
      <section className="relative py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>

            <p className="text-lg text-background/70">
              Last updated: May 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Introduction
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Skyline Travel is committed to protecting the privacy and
                confidentiality of our clients’ personal information.
                This Privacy Policy explains how we collect, use, store,
                and protect your information in accordance with applicable
                laws and industry practices in Ontario and Canada.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Information We Collect
              </h2>

              <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                <li>Full name and contact details.</li>
                <li>Email address and phone number.</li>
                <li>Passport and visa details when required.</li>
                <li>Travel booking and itinerary information.</li>
                <li>Payment and billing information.</li>
                <li>Information submitted through contact forms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                How We Use Your Information
              </h2>

              <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                <li>Processing travel reservations and bookings.</li>
                <li>Issuing tickets and confirmations.</li>
                <li>Providing visa, hotel, and Umrah services.</li>
                <li>Communicating important travel updates.</li>
                <li>Improving our services and customer experience.</li>
                <li>Complying with legal and regulatory obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Sharing Information
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We may share necessary information with airlines,
                hotels, travel providers, insurance companies,
                payment processors, and government authorities
                when required to complete bookings or comply with
                applicable laws. We do not sell personal information
                to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Data Protection
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational
                measures to protect personal information against
                unauthorized access, disclosure, alteration, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Cookies
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Our website may use cookies and analytics technologies
                to improve user experience and optimize website performance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Your Rights
              </h2>

              <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                <li>Request access to your personal data.</li>
                <li>Request corrections or updates.</li>
                <li>Request deletion where legally applicable.</li>
                <li>Opt out of promotional communications.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Compliance
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                Skyline Travel operates in accordance with applicable
                laws and regulations in Ontario and Canada and follows
                professional standards within the travel industry.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Contact Us
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                If you have questions regarding this Privacy Policy
                or how your information is handled, please contact us:
              </p>

              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>Email: info@skylinetrvl.ca</p>
                <p>Phone: +1 437 343 4048</p>
                <p>Mississauga, Ontario, Canada</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}