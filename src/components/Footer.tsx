"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

/* ── Color Palette (Preserved) ── */
const colors = {
  bgCream: "#FDF8F3",
  cardBeige: "#F5EDE4",
  cardCream: "#FAF6F1",
  cardEarth: "#E8DDD0",
  textHeading: "#2C2420",
  textBody: "#5C5047",
  textMuted: "#8B7D6B",
  borderEarth: "#D8C7B5",
  accent: "#D85A30",
  accentLight: "rgba(216, 90, 48, 0.08)",
  accentBorder: "rgba(216, 90, 48, 0.18)",
  dark: "#1C1A17",
};

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const credentials = [
    "Trade License No. 1126644",
    "Dubai DED Registered",
    "Contractor Classification: G+4",
    "Dubai Chamber No. 433957",
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: colors.dark }}
    >
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: colors.accent }}
      />

      {/* Background texture — very subtle */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${colors.bgCream} 0px, ${colors.bgCream} 1px, transparent 1px, transparent 24px)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════
            MAIN GRID — Two columns with clear hierarchy
            Left: Brand + Contact | Right: Credentials + CTA
            ═══════════════════════════════════════════════════ */}
        <div className="py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* ── LEFT COLUMN: Brand & Contact (7 cols) ── */}
          <div className="lg:col-span-7 space-y-10">
            {/* Brand Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <a href="#home" className="inline-block group">
                <div className="relative">
                  {/* Logo with warm tint instead of harsh black */}
                  <Image
                    src="/projects/logoorevamp.webp"
                    alt="Rohit Contracting L.L.C"
                    width={240}
                    height={72}
                    className="h-[60px] sm:h-[72px] w-auto transition-all duration-500 group-hover:opacity-90"
                    style={{
                      objectFit: "contain",
                      filter: "brightness(0) saturate(100%) invert(1)",
                    }}
                  />
                  {/* Subtle glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                    style={{ background: colors.accent }}
                  />
                </div>
              </a>

              <p
                className="mt-5 text-sm leading-relaxed max-w-sm"
                style={{ color: colors.textMuted }}
              >
                Premium villa construction and contracting services across
                Dubai. Licensed, insured, and committed to excellence since
                2022.
              </p>
            </motion.div>

            {/* Contact Grid — Phone, WhatsApp, Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4
                className="text-[11px] font-bold uppercase tracking-[0.2em] mb-5"
                style={{ color: colors.accent }}
              >
                Get in Touch
              </h4>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Phone */}
                <a
                  href="tel:+971559239581"
                  onMouseEnter={() => setHoveredLink("phone")}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-300"
                  style={{
                    background:
                      hoveredLink === "phone"
                        ? "rgba(253, 248, 243, 0.06)"
                        : "transparent",
                    border: `1px solid ${hoveredLink === "phone" ? colors.accent + "40" : "rgba(253,248,243,0.08)"}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background:
                        hoveredLink === "phone"
                          ? colors.accent + "20"
                          : "rgba(253,248,243,0.06)",
                    }}
                  >
                    <Phone size={16} style={{ color: colors.accent }} />
                  </div>
                  <div>
                    <div
                      className="text-[11px] uppercase tracking-wider mb-0.5"
                      style={{ color: colors.textMuted }}
                    >
                      Phone
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: colors.bgCream }}
                    >
                      +971 55 923 9581
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/971559239581?text=Hello%2C%20I%27m%20interested%20in%20Rohit%20Contracting%27s%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredLink("whatsapp")}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-300"
                  style={{
                    background:
                      hoveredLink === "whatsapp"
                        ? "rgba(253, 248, 243, 0.06)"
                        : "transparent",
                    border: `1px solid ${hoveredLink === "whatsapp" ? "#25D36640" : "rgba(253,248,243,0.08)"}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background:
                        hoveredLink === "whatsapp"
                          ? "rgba(37, 211, 102, 0.15)"
                          : "rgba(253,248,243,0.06)",
                    }}
                  >
                    <MessageCircle size={16} style={{ color: "#25D366" }} />
                  </div>
                  <div>
                    <div
                      className="text-[11px] uppercase tracking-wider mb-0.5"
                      style={{ color: colors.textMuted }}
                    >
                      WhatsApp
                    </div>
                    <div
                      className="text-sm font-medium flex items-center gap-1"
                      style={{ color: colors.bgCream }}
                    >
                      +971 55 923 9581
                      <ExternalLink size={10} className="opacity-50" />
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@rohitcontracting.ae"
                  onMouseEnter={() => setHoveredLink("email")}
                  onMouseLeave={() => setHoveredLink(null)}
                  className="group flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-300 sm:col-span-2"
                  style={{
                    background:
                      hoveredLink === "email"
                        ? "rgba(253, 248, 243, 0.06)"
                        : "transparent",
                    border: `1px solid ${hoveredLink === "email" ? colors.accent + "40" : "rgba(253,248,243,0.08)"}`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background:
                        hoveredLink === "email"
                          ? colors.accent + "20"
                          : "rgba(253,248,243,0.06)",
                    }}
                  >
                    <Mail size={16} style={{ color: colors.accent }} />
                  </div>
                  <div>
                    <div
                      className="text-[11px] uppercase tracking-wider mb-0.5"
                      style={{ color: colors.textMuted }}
                    >
                      Email
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: colors.bgCream }}
                    >
                      info@rohitcontracting.ae
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Social Links — Minimal, refined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span
                className="text-[11px] uppercase tracking-wider mr-2"
                style={{ color: colors.textMuted }}
              >
                Follow
              </span>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/rohitcontracting?igsh=b2dpdGFldXVtbHR4"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: "rgba(253,248,243,0.06)",
                  border: "1px solid rgba(253,248,243,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #833AB4, #E1306C, #FCAF45)";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(253,248,243,0.06)";
                  e.currentTarget.style.borderColor = "rgba(253,248,243,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="Instagram"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-[#FDF8F3]"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/rohit-contracting-l-l-c"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: "rgba(253,248,243,0.06)",
                  border: "1px solid rgba(253,248,243,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0A66C2";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(253,248,243,0.06)";
                  e.currentTarget.style.borderColor = "rgba(253,248,243,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
                aria-label="LinkedIn"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#FDF8F3]"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Credentials & CTA (5 cols) ── */}
          <div
            className="lg:col-span-5 lg:pl-8 lg:border-l"
            style={{ borderColor: "rgba(253,248,243,0.08)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="h-full flex flex-col"
            >
              {/* Credentials */}
              <div className="mb-8">
                <h4
                  className="text-[11px] font-bold uppercase tracking-[0.2em] mb-6"
                  style={{ color: colors.accent }}
                >
                  Our Credentials
                </h4>

                <ul className="space-y-3">
                  {credentials.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2
                        size={14}
                        className="mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-[#D85A30]"
                        style={{ color: colors.textMuted }}
                      />
                      <span
                        className="text-sm leading-snug transition-colors duration-300 group-hover:text-[#FDF8F3]"
                        style={{ color: colors.textMuted }}
                      >
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div
                className="mt-auto p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background: "rgba(253, 248, 243, 0.04)",
                  border: `1px solid rgba(253,248,243,0.1)`,
                }}
              >
                {/* Subtle accent glow */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-3xl"
                  style={{ background: colors.accent }}
                />

                <h5
                  className="text-lg font-bold mb-2 relative z-10"
                  style={{
                    color: colors.bgCream,
                    fontFamily: "var(--font-serif), Georgia, serif",
                  }}
                >
                  Ready to build?
                </h5>
                <p
                  className="text-sm mb-5 relative z-10"
                  style={{ color: colors.textMuted }}
                >
                  Let's discuss your next villa project in Dubai.
                </p>

                <a
                  href="https://wa.me/971559239581?text=Hello%2C%20I%27m%20interested%20in%20a%20project%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: colors.accent,
                    color: "white",
                    boxShadow: "0 4px 16px rgba(216, 90, 48, 0.3)",
                  }}
                >
                  Start a Conversation
                  <ArrowUp
                    size={14}
                    className="rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            BOTTOM BAR — Clean, minimal, single row
            ═══════════════════════════════════════════════════ */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: `1px solid rgba(253,248,243,0.08)` }}
        >
          <div
            className="flex items-center gap-2 text-xs"
            style={{ color: colors.textMuted }}
          >
            <span>&copy; {currentYear} Rohit Contracting L.L.C</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">All rights reserved</span>
          </div>

          <div
            className="flex items-center gap-4 text-xs"
            style={{ color: colors.textMuted }}
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={12} style={{ color: colors.accent }} />
              Dubai
            </span>
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: colors.textMuted }}
            />
            <span>Premium Villa Construction</span>
          </div>
        </div>
      </div>

      {/* Scroll to top — floating, minimal */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
        style={{
          background: colors.accent,
          color: colors.bgCream,
          boxShadow: "0 4px 20px rgba(216, 90, 48, 0.4)",
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </motion.button>
    </footer>
  );
}
