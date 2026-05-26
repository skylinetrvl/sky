"use client";

import { useLanguage } from "@/components/language-context";

export default function TermsPage() {
  const { language } = useLanguage();

  if (language === "ar") {
    return (
      <div className="pt-26">
        <section className="relative py-24 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                شروط الخدمة
              </h1>
              <p className="text-lg text-background/70">
                آخر تحديث: مايو 2026
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  القبول بالشروط
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  باستخدام موقع وخدمات سكاي لاين للسفر والسياحة، فإنك توافق
                  على الالتزام بهذه الشروط والأحكام. يرجى قراءة هذه الشروط
                  بعناية قبل إجراء أي حجز أو طلب خدمة.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  طبيعة خدماتنا
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  تقدم سكاي لاين خدمات السفر والسياحة، بما في ذلك حجوزات
                  الطيران، الفنادق، الباقات السياحية، خدمات التأشيرات، وباقات
                  العمرة. قد نعمل كوسيط أو وكيل بين العميل ومقدمي خدمات السفر
                  مثل شركات الطيران والفنادق ومزودي الرحلات.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  الحجوزات والتأكيد
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  جميع الحجوزات تخضع للتوفر، وتصبح مؤكدة فقط بعد استلام
                  الدفعة المطلوبة وإصدار التأكيد الرسمي أو التذكرة أو مستند
                  الحجز. الأسعار والمواعيد والتوفر قد تتغير قبل تأكيد الحجز.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  الأسعار والرسوم
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  قد تشمل الأسعار الضرائب والرسوم حسب نوع الخدمة والعرض
                  المقدم. أي رسوم خدمة أو رسوم استشارة أو رسوم إدارية سيتم
                  توضيحها للعميل قبل إتمام الحجز متى كانت قابلة للتطبيق.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  الدفع
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  يجب دفع المبالغ المطلوبة وفق شروط الحجز. قد يؤدي التأخير في
                  الدفع إلى إلغاء الحجز أو تغير السعر أو فقدان التوفر. يحتفظ
                  مزود الخدمة أو شركة الطيران بالحق في تعديل الأسعار قبل
                  إصدار التذاكر أو تأكيد الحجز النهائي.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  الإلغاء والتعديل والاسترداد
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  تخضع طلبات الإلغاء أو التعديل أو الاسترداد لشروط مزود
                  الخدمة، بما في ذلك شركات الطيران والفنادق ومنظمي الرحلات.
                  بعض الحجوزات قد تكون غير قابلة للاسترداد أو غير قابلة
                  للتعديل. قد تطبق رسوم إدارية أو رسوم خدمة إضافية.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  مسؤوليات العميل
                </h2>
                <ul className="space-y-3 text-muted-foreground list-disc pr-6">
                  <li>التأكد من صحة الاسم كما يظهر في جواز السفر.</li>
                  <li>التأكد من صلاحية جواز السفر قبل السفر.</li>
                  <li>الحصول على التأشيرات والتصاريح المطلوبة.</li>
                  <li>التحقق من متطلبات الدخول والعبور واللقاحات إن وجدت.</li>
                  <li>مراجعة تفاصيل الحجز قبل الدفع والتأكيد.</li>
                  <li>الوصول إلى المطار في الوقت المحدد.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  التأشيرات ووثائق السفر
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  تقديم خدمات التأشيرات لا يضمن الموافقة على التأشيرة، إذ
                  تخضع الموافقة النهائية للجهات الحكومية المختصة. العميل
                  مسؤول عن تقديم معلومات صحيحة وكاملة وعن الالتزام بجميع
                  متطلبات السفر.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  تأمين السفر
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  نوصي جميع العملاء بالحصول على تأمين سفر مناسب يشمل الإلغاء،
                  الطوارئ الطبية، فقدان الأمتعة، وتأخير الرحلات. عدم شراء
                  التأمين قد يعرّض العميل لتحمل خسائر أو تكاليف إضافية.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  التغييرات الخارجة عن سيطرتنا
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  لا تتحمل سكاي لاين المسؤولية عن التأخير أو الإلغاء أو
                  التغييرات الناتجة عن شركات الطيران أو الفنادق أو الظروف
                  الجوية أو القرارات الحكومية أو الكوارث الطبيعية أو الظروف
                  الصحية أو الأمنية أو أي أحداث خارجة عن سيطرتنا.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  حدود المسؤولية
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  تعمل سكاي لاين كوكالة سفر أو وسيط لترتيب خدمات السفر. نحن
                  لا نملك أو ندير شركات الطيران أو الفنادق أو مزودي الخدمات
                  الآخرين، ولا نتحمل مسؤولية مباشرة عن أخطائهم أو تقصيرهم أو
                  تغييراتهم، مع التزامنا بمساعدة العميل قدر الإمكان.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  الامتثال والتنظيم
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  تسعى سكاي لاين إلى الالتزام بالقوانين واللوائح المعمول بها
                  في أونتاريو وكندا وبالممارسات المهنية في قطاع السفر. يخضع
                  قطاع وكالات السفر في أونتاريو لقانون صناعة السفر ولوائحه
                  التنظيمية التي تديرها TICO.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  التواصل معنا
                </h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>البريد الإلكتروني: info@skylinetrvl.ca</p>
                  <p>الهاتف: +1 437 343 4048</p>
                  <p>الموقع: ميسيساغا، أونتاريو، كندا</p>
                </div>
              </div>
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
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-background/70">
              Last updated: May 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By using Skyline Travel services or website, you agree to be
                bound by these Terms of Service. Please read them carefully
                before making a booking or requesting any travel service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Nature of Our Services
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Skyline Travel provides travel-related services, including
                flight bookings, hotel reservations, tour packages, visa
                assistance, and Umrah packages. We may act as an intermediary
                or agent between the customer and third-party travel suppliers
                such as airlines, hotels, tour operators, and service providers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Bookings and Confirmation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All bookings are subject to availability and are confirmed only
                after the required payment has been received and an official
                confirmation, ticket, or travel document has been issued.
                Prices, schedules, and availability may change before final
                confirmation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Prices and Fees
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Prices may include applicable taxes and charges depending on
                the service and offer. Any service fees, counselling fees, or
                administrative charges will be disclosed to the customer before
                completing the booking where applicable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Payment
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment must be made according to the booking requirements.
                Delayed payment may result in cancellation, price changes, or
                loss of availability. Suppliers and airlines may change pricing
                before tickets or final confirmations are issued.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Cancellations, Changes, and Refunds
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Cancellation, change, and refund requests are subject to the
                terms and conditions of the applicable supplier, including
                airlines, hotels, and tour operators. Some bookings may be
                non-refundable or non-changeable. Administrative or service
                fees may apply.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Customer Responsibilities
              </h2>
              <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                <li>Ensure names match the traveler’s passport exactly.</li>
                <li>Ensure passports are valid before travel.</li>
                <li>Obtain required visas, permits, and travel documents.</li>
                <li>Check entry, transit, health, and vaccination requirements.</li>
                <li>Review booking details before payment and confirmation.</li>
                <li>Arrive at the airport on time.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Visas and Travel Documents
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Visa assistance does not guarantee visa approval. Final
                decisions are made by the relevant government authorities. The
                customer is responsible for providing accurate and complete
                information and meeting all travel requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Travel Insurance
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We strongly recommend that all customers purchase suitable
                travel insurance covering cancellation, emergency medical
                expenses, lost baggage, and travel delays. Declining insurance
                may expose the customer to financial losses or additional costs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Changes Beyond Our Control
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Skyline Travel is not responsible for delays, cancellations,
                schedule changes, supplier changes, weather conditions,
                government actions, natural disasters, health emergencies,
                security events, or any circumstances beyond our reasonable
                control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Skyline Travel acts as a travel agency or intermediary in
                arranging travel services. We do not own or operate airlines,
                hotels, or third-party service providers and are not directly
                responsible for their acts, omissions, delays, or changes,
                although we will make reasonable efforts to assist our clients.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Compliance and Regulation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Skyline Travel seeks to comply with applicable laws and
                regulations in Ontario and Canada and with professional travel
                industry practices. Travel agencies in Ontario are governed by
                the Travel Industry Act and related regulations administered by
                TICO.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Contact Us
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: info@skylinetrvl.ca</p>
                <p>Phone: +1 437 343 4048</p>
                <p>Location: Mississauga, Ontario, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}