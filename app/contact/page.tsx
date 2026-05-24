"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language-context";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
const response = await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    access_key: "7d304cca-3927-4a54-9bc8-8d82072b235f",
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    subject: "New message from Skyline website",
  }),
});

const result = await response.json();

if (!result.success) {
  throw new Error("Message failed");
}    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.info.address,
      value: t.contact.info.addressValue,
      link: "https://maps.google.com/?q=Mississauga,Ontario,Canada",
    },
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: "+1 437 343 4048",
      link: "tel:+14373434048",
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: "info@skylinetrvl.ca",
      link: "mailto:info@skylinetrvl.ca",
    },
    {
      icon: Clock,
      label: t.contact.info.hours,
      value: t.contact.info.hoursValue,
      link: null,
    },
  ];

  return (
    <div className="pt-34">
      {/* Hero Section */}
      <section className="relative py-24 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80)",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              {t.contact.title}
            </h1>
            <p className="text-lg md:text-xl text-background/70 text-pretty">
              {t.contact.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {t.contact.subtitle}
              </h2>

              {submitted && (
                <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800">
                  {language === "ar"
                    ? "شكراً لتواصلك معنا! سنرد عليك قريباً."
                    : "Thank you for contacting us! We'll get back to you soon."}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={language === "ar" ? "أدخل اسمك الكامل" : "Enter your full name"}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={language === "ar" ? "example@email.com" : "example@email.com"}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder={language === "ar" ? "رقم الهاتف" : "Phone number"}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder={language === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg"
                >
                  {isSubmitting ? (
                    t.contact.form.sending
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <Send className="w-5 h-5 ms-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                  {language === "ar" ? "معلومات التواصل" : "Contact Information"}
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            {info.label}
                          </div>
                          <div className="text-lg font-medium text-foreground">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    );

                    return info.link ? (
                      <a
                        key={index}
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  {t.footer.followUs}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/instaaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://facebook.com/faceee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-64 bg-secondary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92452.34727036795!2d-79.71892086640625!3d43.59508899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b469fe76b05b7%3A0x3f5e3c0cf405fc64!2sMississauga%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1679012345678!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Skyline Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
