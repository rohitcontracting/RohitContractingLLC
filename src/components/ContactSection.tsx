"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    // Name: required, min 2 chars
    if (!formState.name.trim()) {
      errors.name = "Name is required";
    } else if (formState.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    // Email: required, valid format
    if (!formState.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Phone: optional, but validate format if filled
    if (formState.phone.trim()) {
      // Check for invalid characters first
      if (!/^\+?[\d\s\-()]+$/.test(formState.phone.trim())) {
        errors.phone = "Phone contains invalid characters";
      } else {
        // Then check digit count (7-15 for international numbers)
        const cleaned = formState.phone.replace(/[\s\-()]/g, "");
        const digitsOnly = cleaned.replace(/\+/g, "");
        if (digitsOnly.length < 7 || digitsOnly.length > 15) {
          errors.phone = "Please enter a valid phone number (7–15 digits)";
        }
      }
    }

    // Message: required, min 5 chars
    if (!formState.message.trim()) {
      errors.message = "Message is required";
    } else if (formState.message.trim().length < 5) {
      errors.message = "Message must be at least 5 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setSubmitting(true);

    try {
      const payload = {
        access_key: "c5226d22-9b4d-4440-8177-487510321feb",
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        message: formState.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitError(result.message || "Submission failed. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const clearError = (field: string) => {
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const cardStyle = (id: string) =>
    ({
      background: "var(--color-surface-card)",
      border: hoveredCard === id ? "1px solid color-mix(in oklch, var(--color-accent-brand) calc(0.3 * 100%), transparent)" : "1px solid var(--color-border-earth)",
      boxShadow:
        hoveredCard === id
          ? "0 4px 20px color-mix(in oklch, var(--color-shadow-warm) calc(0.12 * 100%), transparent)"
          : "0 2px 12px color-mix(in oklch, var(--color-shadow-warm) calc(0.08 * 100%), transparent)",
      transition: "all 0.3s ease",
    } as React.CSSProperties);

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "var(--color-surface-beige)" }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
        <div className="absolute inset-0 industrial-texture opacity-[0.06]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "color-mix(in oklch, var(--color-accent-brand) calc(0.08 * 100%), transparent)",
              border: "1px solid color-mix(in oklch, var(--color-accent-brand) calc(0.18 * 100%), transparent)",
            }}
          >
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium tracking-wide">
              Contact Us
            </span>
          </div>
          <h2 className="heading-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Get In{" "}
            <span className="text-gradient-warm">Touch</span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--color-warm-text)" }}
          >
            Ready to start your project? Reach out to our team
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Map Card */}
            <div
              className="rounded-2xl p-6"
              style={cardStyle("map")}
              onMouseEnter={() => setHoveredCard("map")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "color-mix(in oklch, var(--color-accent-brand) calc(0.1 * 100%), transparent)",
                    border: "1px solid color-mix(in oklch, var(--color-accent-brand) calc(0.15 * 100%), transparent)",
                  }}
                >
                  <MapPin className="text-accent" size="22" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Our Location
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    Sky Business Centre, #109 Office,
                    <br />
                    Nad Al Hamar Road, Al Kheeran, Dubai Festival City,
                    <br />
                    Dubai
                  </p>
                </div>
              </div>
              {/* Google Maps embed — clickable to open in Maps app */}
              <a
                href="https://maps.app.goo.gl/cYSoZG6jWdF1d41K7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-xl overflow-hidden block"
                style={{ border: "1px solid var(--color-border-warm)" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=Sky+Business+Centre+%23109+Office+Nad+Al+Hamar+Road+Al+Kheeran+Dubai+Festival+City+Dubai&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: "block", pointerEvents: "none" }}
                  loading="lazy"
                  title="Rohit Contracting Location - Dubai Festival City"
                />
              </a>
            </div>

            {/* Phone Card */}
            <div
              className="rounded-2xl p-6"
              style={cardStyle("phone")}
              onMouseEnter={() => setHoveredCard("phone")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "color-mix(in oklch, var(--color-accent-brand) calc(0.1 * 100%), transparent)",
                    border: "1px solid color-mix(in oklch, var(--color-accent-brand) calc(0.15 * 100%), transparent)",
                  }}
                >
                  <Phone className="text-accent" size="22" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:+971559239581"
                    className="text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    +971 55 923 9581
                  </a>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--color-warm-muted)" }}
                  >
                    Mon–Sat, 7am–6pm
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div
              className="rounded-2xl p-6"
              style={cardStyle("email")}
              onMouseEnter={() => setHoveredCard("email")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "color-mix(in oklch, var(--color-accent-brand) calc(0.1 * 100%), transparent)",
                    border: "1px solid color-mix(in oklch, var(--color-accent-brand) calc(0.15 * 100%), transparent)",
                  }}
                >
                  <Mail className="text-accent" size="22" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:info@rohitcontracting.ae"
                    className="text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    info@rohitcontracting.ae
                  </a>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--color-warm-muted)" }}
                  >
                    We reply within 2 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div
              className="rounded-2xl p-6"
              style={cardStyle("hours")}
              onMouseEnter={() => setHoveredCard("hours")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "color-mix(in oklch, var(--color-accent-brand) calc(0.1 * 100%), transparent)",
                    border: "1px solid color-mix(in oklch, var(--color-accent-brand) calc(0.15 * 100%), transparent)",
                  }}
                >
                  <Clock className="text-accent" size="22" />
                </div>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Business Hours
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    Monday – Saturday: 7:00 AM – 6:00 PM
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--color-warm-muted)" }}
                  >
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/971559239581?text=Hello%2C%20I'm%20interested%20in%20Rohit%20Contracting's%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl p-5 transition-all duration-300 group"
              style={{
                background: "var(--color-surface-card)",
                border: "1px solid var(--color-border-earth)",
                boxShadow: "0 2px 12px color-mix(in oklch, var(--color-shadow-warm) calc(0.08 * 100%), transparent)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "color-mix(in oklch, var(--color-accent-brand) calc(0.3 * 100%), transparent)";
                e.currentTarget.style.boxShadow = "0 4px 20px color-mix(in oklch, var(--color-shadow-warm) calc(0.12 * 100%), transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border-earth)";
                e.currentTarget.style.boxShadow = "0 2px 12px color-mix(in oklch, var(--color-shadow-warm) calc(0.08 * 100%), transparent)";
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                style={{
                  background: "rgba(22, 163, 74, 0.12)",
                  border: "1px solid rgba(22, 163, 74, 0.2)",
                }}
              >
                <MessageCircle className="text-emerald-600" size="22" />
              </div>
              <div className="flex-1">
                <div
                  className="font-semibold"
                  style={{ color: "var(--color-heading)" }}
                >
                  Chat on WhatsApp
                </div>
                <div
                  className="text-sm"
                  style={{ color: "var(--color-warm-muted)" }}
                >
                  Quick response via WhatsApp
                </div>
              </div>
              <ChevronRight
                size="18"
                className="text-emerald-600 group-hover:translate-x-1 transition-transform shrink-0"
              />
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-8 sm:p-10 space-y-6"
              style={{
                background: "var(--color-surface-card)",
                border: "1px solid var(--color-border-earth)",
                boxShadow: "0 2px 12px color-mix(in oklch, var(--color-shadow-warm) calc(0.08 * 100%), transparent)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--color-heading)" }}
              >
                Send us a Message
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: "var(--color-warm-muted)" }}
              >
                Fill in the form and our team will get back to you shortly
              </p>

              {submitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{
                      background: "color-mix(in oklch, var(--color-accent-brand) calc(0.1 * 100%), transparent)",
                    }}
                  >
                    <svg
                      className="text-accent"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Message Sent!
                  </h4>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    Thank you for reaching out. We'll get back to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  {/* Error message */}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: "color-mix(in oklch, oklch(0.55 0.2 30) calc(0.1 * 100%), transparent)",
                        border: "1px solid color-mix(in oklch, oklch(0.55 0.2 30) calc(0.25 * 100%), transparent)",
                        color: "oklch(0.55 0.2 30)",
                      }}
                    >
                      {submitError}
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--color-warm-text)" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => {
                          setFormState({ ...formState, name: e.target.value });
                          clearError("name");
                        }}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none placeholder-[var(--color-warm-muted)]"
                        style={{
                          background: "color-mix(in oklch, var(--color-shadow-warm) calc(0.05 * 100%), transparent)",
                          border: formErrors.name ? "1px solid oklch(0.55 0.2 30)" : "1px solid var(--color-border-warm)",
                          color: "var(--color-heading)",
                        }}
                        placeholder="Your full name"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = formErrors.name ? "oklch(0.55 0.2 30)" : "var(--color-accent, var(--color-accent-brand))";
                          e.currentTarget.style.background = "color-mix(in oklch, var(--color-accent-brand) calc(0.05 * 100%), transparent)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = formErrors.name ? "oklch(0.55 0.2 30)" : "var(--color-border-warm)";
                          e.currentTarget.style.background = "color-mix(in oklch, var(--color-shadow-warm) calc(0.05 * 100%), transparent)";
                        }}
                        required
                      />
                      {formErrors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs mt-1.5"
                          style={{ color: "oklch(0.55 0.2 30)" }}
                        >
                          {formErrors.name}
                        </motion.p>
                      )}
                    </div>
                    <div className="group">
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "var(--color-warm-text)" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => {
                          setFormState({ ...formState, email: e.target.value });
                          clearError("email");
                        }}
                        className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none placeholder-[var(--color-warm-muted)]"
                        style={{
                          background: "color-mix(in oklch, var(--color-shadow-warm) calc(0.05 * 100%), transparent)",
                          border: formErrors.email ? "1px solid oklch(0.55 0.2 30)" : "1px solid var(--color-border-warm)",
                          color: "var(--color-heading)",
                        }}
                        placeholder="your@email.com"
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = formErrors.email ? "oklch(0.55 0.2 30)" : "var(--color-accent, var(--color-accent-brand))";
                          e.currentTarget.style.background = "color-mix(in oklch, var(--color-accent-brand) calc(0.05 * 100%), transparent)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = formErrors.email ? "oklch(0.55 0.2 30)" : "var(--color-border-warm)";
                          e.currentTarget.style.background = "color-mix(in oklch, var(--color-shadow-warm) calc(0.05 * 100%), transparent)";
                        }}
                        required
                      />
                      {formErrors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-xs mt-1.5"
                          style={{ color: "oklch(0.55 0.2 30)" }}
                        >
                          {formErrors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--color-warm-text)" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => {
                        setFormState({ ...formState, phone: e.target.value });
                        clearError("phone");
                      }}
                      className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none placeholder-[var(--color-warm-muted)]"
                      style={{
                        background: "color-mix(in oklch, var(--color-shadow-warm) calc(0.05 * 100%), transparent)",
                        border: formErrors.phone ? "1px solid oklch(0.55 0.2 30)" : "1px solid var(--color-border-warm)",
                        color: "var(--color-heading)",
                      }}
                      placeholder="+1 234 567 8900"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = formErrors.phone ? "oklch(0.55 0.2 30)" : "var(--color-accent, var(--color-accent-brand))";
                        e.currentTarget.style.background = "color-mix(in oklch, var(--color-accent-brand) calc(0.05 * 100%), transparent)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = formErrors.phone ? "oklch(0.55 0.2 30)" : "var(--color-border-warm)";
                        e.currentTarget.style.background = "color-mix(in oklch, var(--color-shadow-warm) calc(0.05 * 100%), transparent)";
                      }}
                    />
                    {formErrors.phone && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs mt-1.5"
                        style={{ color: "oklch(0.55 0.2 30)" }}
                      >
                        {formErrors.phone}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "var(--color-warm-text)" }}
                    >
                      Message
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => {
                        setFormState({ ...formState, message: e.target.value });
                        clearError("message");
                      }}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none resize-none placeholder-[var(--color-warm-muted)]"
                      style={{
                        background: "color-mix(in oklch, var(--color-shadow-warm) calc(0.05 * 100%), transparent)",
                        border: formErrors.message ? "1px solid oklch(0.55 0.2 30)" : "1px solid var(--color-border-warm)",
                        color: "var(--color-heading)",
                      }}
                      placeholder="Tell us about your project — e.g., 'I'd like a quote for a 3-bedroom villa in Al Barsha'"
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = formErrors.message ? "oklch(0.55 0.2 30)" : "var(--color-accent, var(--color-accent-brand))";
                        e.currentTarget.style.background = "color-mix(in oklch, var(--color-accent-brand) calc(0.05 * 100%), transparent)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = formErrors.message ? "oklch(0.55 0.2 30)" : "var(--color-border-warm)";
                        e.currentTarget.style.background = "color-mix(in oklch, var(--color-shadow-warm) calc(0.05 * 100%), transparent)";
                      }}
                      required
                    />
                    {formErrors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs mt-1.5"
                        style={{ color: "oklch(0.55 0.2 30)" }}
                      >
                        {formErrors.message}
                      </motion.p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-accent hover:bg-accent-dark text-accent-foreground font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size="18" />
                        Send Message
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
