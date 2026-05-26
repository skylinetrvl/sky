"use client";

export function WhatsAppButton() {
  const phoneNumber = "+14373434048";
  const message = encodeURIComponent(
    "Hello! I'm interested in your travel services."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-gold hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.65.86 5.1 2.33 7.09L4.8 28.6l6.63-1.48a11.95 11.95 0 0 0 4.61.92C22.68 28.04 28.08 22.64 28.08 16S22.68 3 16.04 3Zm0 22.9c-1.5 0-2.96-.4-4.25-1.15l-.3-.18-3.94.88.84-3.84-.2-.32a9.8 9.8 0 0 1-1.52-5.25c0-5.18 4.2-9.38 9.37-9.38s9.38 4.2 9.38 9.38-4.2 9.86-9.38 9.86Zm5.28-7.02c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
      </svg>
    </a>
  );
}