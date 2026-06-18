import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight } from "lucide-react";

export default function ContactStatic() {
  return (
    <section 
      className="static-fallback relative overflow-hidden bg-[#FAF7F2] py-24 sm:py-32"
    >
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-[#D85A3014] border border-[#D85A302E]">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium tracking-wide">Contact Us</span>
          </div>
          <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--color-heading)" }}>
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "var(--color-warm-text)" }}>
            Ready to start your project? Reach out to our team
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Map / Location Card */}
            <div className="rounded-2xl p-6 bg-[#FDF8F3] border border-[#D8C7B5]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D85A3014] border border-[#D85A3026] flex items-center justify-center shrink-0">
                  <MapPin className="text-accent" size="22" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-[#1C1A17]">Our Location</h3>
                  <p className="text-sm leading-relaxed text-[#5C5047]">
                    Sky Business Centre, #109 Office,
                    <br />
                    Nad Al Hamar Road, Al Kheeran, Dubai Festival City,
                    <br />
                    Dubai
                  </p>
                </div>
              </div>
              {/* Static map placeholder — iframe loads in client version instead */}
              <div
                className="mt-4 rounded-xl overflow-hidden bg-[#E8DCC8] flex items-center justify-center"
                style={{ height: 200, border: "1px solid var(--color-border-warm)" }}
              >
                <span className="text-[#8B6347] text-sm font-medium">Dubai Festival City</span>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl p-6 bg-[#FDF8F3] border border-[#D8C7B5]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D85A3014] border border-[#D85A3026] flex items-center justify-center shrink-0">
                  <Phone className="text-accent" size="22" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-[#1C1A17]">Phone</h3>
                  <a href="tel:+971559239581" className="text-sm text-accent">
                    +971 55 923 9581
                  </a>
                  <p className="text-xs mt-1 text-[#7A6250]">Mon–Sat, 7am–6pm</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl p-6 bg-[#FDF8F3] border border-[#D8C7B5]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D85A3014] border border-[#D85A3026] flex items-center justify-center shrink-0">
                  <Mail className="text-accent" size="22" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-[#1C1A17]">Email</h3>
                  <a href="mailto:info@rohitcontracting.ae" className="text-sm text-accent">
                    info@rohitcontracting.ae
                  </a>
                  <p className="text-xs mt-1 text-[#7A6250]">We reply within 2 hours</p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl p-6 bg-[#FDF8F3] border border-[#D8C7B5]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D85A3014] border border-[#D85A3026] flex items-center justify-center shrink-0">
                  <Clock className="text-accent" size="22" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-[#1C1A17]">Business Hours</h3>
                  <p className="text-sm text-[#5C5047]">
                    Monday – Saturday: 7:00 AM – 6:00 PM
                  </p>
                  <p className="text-xs mt-1 text-[#7A6250]">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/971559239581?text=Hello%2C%20I'm%20interested%20in%20Rohit%20Contracting's%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl p-5 bg-[#FDF8F3] border border-[#D8C7B5] transition-all hover:border-[#D85A304D]"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#16A3491F] border border-[#16A34933]">
                <MessageCircle className="text-emerald-600" size="22" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[#1C1A17]">Chat on WhatsApp</div>
                <div className="text-sm text-[#7A6250]">Quick response via WhatsApp</div>
              </div>
              <ChevronRight size="18" className="text-emerald-600 shrink-0" />
            </a>
          </div>

          {/* Form Placeholder */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-10 bg-[#FDF8F3] border border-[#D8C7B5] flex items-center justify-center min-h-[400px]">
              <span className="text-[#7A6250] font-medium italic">Contact Form Initializing...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
