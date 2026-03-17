"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { businessInfo } from "@/lib/seo-config";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ChevronRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { EnvelopeAnimation } from "@/components/envelope-animation";

// --- Confetti Particle ---
interface Particle {
  id: number;
  x: number;
  color: string;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  shape: "rect" | "circle";
}

const confettiColors = [
  "#16a34a",
  "#22c55e",
  "#86efac",
  "#fbbf24",
  "#f97316",
  "#60a5fa",
  "#a78bfa",
  "#f472b6",
];

function Confetti() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        size: Math.random() * 8 + 5,
        duration: Math.random() * 2 + 2,
        delay: Math.random() * 1.5,
        rotation: Math.random() * 360,
        shape: Math.random() > 0.5 ? "rect" : "circle",
      }))
    );
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute top-0"
          style={{
            left: `${p.x}%`,
            width: p.shape === "circle" ? p.size : p.size * 0.6,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            transform: `rotate(${p.rotation}deg)`,
            animation: `confettiFall ${p.duration}s ease-in ${p.delay}s both`,
          }}
        />
      ))}
    </div>
  );
}

// --- Animated Checkmark SVG ---
function AnimatedCheck() {
  return (
    <div className="relative flex items-center justify-center w-28 h-28">
      {/* Pulsing ring */}
      <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-40" />
      <div className="absolute inset-2 rounded-full bg-green-50" />
      {/* SVG checkmark */}
      <svg
        viewBox="0 0 52 52"
        className="w-20 h-20 relative z-10"
        style={{ filter: "drop-shadow(0 4px 12px rgba(22,163,74,0.4))" }}
      >
        <circle
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="#16a34a"
          strokeWidth="2.5"
          style={{
            strokeDasharray: 160,
            strokeDashoffset: 0,
            animation: "drawCircle 0.6s ease-out forwards",
          }}
        />
        <path
          fill="none"
          stroke="#16a34a"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 27 l9 9 l16 -18"
          style={{
            strokeDasharray: 40,
            strokeDashoffset: 40,
            animation: "drawCheck 0.4s ease-out 0.5s forwards",
          }}
        />
      </svg>
    </div>
  );
}

// --- Success Overlay ---
interface SuccessOverlayProps {
  visible: boolean;
  onDone: () => void;
}

function SuccessOverlay({ visible, onDone }: SuccessOverlayProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (visible) {
      timerRef.current = setTimeout(() => {
        onDone();
      }, 3200);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [visible, onDone]);

  return (
    <>
      {/* Keyframe styles */}
      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(420px) rotate(720deg); opacity: 0; }
        }
        @keyframes drawCircle {
          from { stroke-dashoffset: 160; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes drawCheck {
          from { stroke-dashoffset: 40; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes popIn {
          0%   { transform: scale(0.6); opacity: 0; }
          70%  { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(16px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes fadeOverlay {
          0%   { opacity: 0; }
          10%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      <div
        className="absolute inset-0 z-20 flex items-center justify-center rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.96)",
          backdropFilter: "blur(4px)",
          animation: visible ? "fadeOverlay 3.2s ease forwards" : "none",
          display: visible ? "flex" : "none",
        }}
      >
        <Confetti />

        <div
          className="relative z-10 flex flex-col items-center text-center px-8"
          style={{ animation: "popIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards" }}
        >
          <AnimatedCheck />

          <h3
            className="text-3xl font-bold text-gray-900 mt-6 mb-2"
            style={{ animation: "slideUp 0.5s ease 0.8s both" }}
          >
            Nachricht gesendet!
          </h3>

          <p
            className="text-gray-500 text-base max-w-xs"
            style={{ animation: "slideUp 0.5s ease 1s both" }}
          >
            Wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>

          {/* Decorative dots */}
          <div
            className="flex gap-2 mt-6"
            style={{ animation: "slideUp 0.5s ease 1.2s both" }}
          >
            {["bg-green-400", "bg-yellow-400", "bg-blue-400"].map((c, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${c}`}
                style={{
                  animation: `bounce 0.8s ease ${1.3 + i * 0.15}s infinite alternate`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// --- Main Page ---
export default function KontaktPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        setErrorMsg(
          data.error ?? "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
        );
        setIsSubmitting(false);
        return;
      }

      // Success — show animation, then reveal thank-you card
      setIsSubmitting(false);
      setShowOverlay(true);
      setFormState({ name: "", email: "", telefon: "", nachricht: "" });
    } catch {
      setErrorMsg(
        "Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut."
      );
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errorMsg) setErrorMsg(null);
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Telefon",
      content: businessInfo.contact.phoneDisplay,
      subContent: businessInfo.contact.phone2Display,
      href: `tel:${businessInfo.contact.phone}`,
      color: "bg-emerald-500",
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: businessInfo.contact.email,
      href: `mailto:${businessInfo.contact.email}`,
      color: "bg-blue-500",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: businessInfo.address.street,
      subContent: `${businessInfo.address.postalCode} ${businessInfo.address.city}`,
      href: `https://maps.google.com/?q=${encodeURIComponent(
        `${businessInfo.address.street}, ${businessInfo.address.postalCode} ${businessInfo.address.city}`
      )}`,
      color: "bg-orange-500",
    },
    {
      icon: Clock,
      title: "Öffnungszeiten",
      content: "Mo - Sa: 7:00 - 20:00",
      subContent: "24/7 telefonisch erreichbar",
      color: "bg-purple-500",
    },
  ];

  return (
    <>
      <Header />

      <main className="pt-28 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white
                            flex flex-col
                            md:h-[calc(100vh-7rem)] md:min-h-[700px] md:bg-gradient-to-br md:from-green-50 md:via-white md:to-emerald-50 md:px-4">



          {/* Mobile: Animation und Text */}
          <div className="flex md:hidden flex-col items-center justify-start w-full px-6 pt-6 pb-8 mt-4">
            <div className="w-full flex justify-center pointer-events-none mb-4">
              <EnvelopeAnimation />
            </div>

            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                Kontaktieren Sie uns
              </h1>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Haben Sie Fragen oder wünschen ein unverbindliches Angebot?
                Wir sind für Sie da – schnell, persönlich und unkompliziert.
              </p>
              {/* Icon-Kreise */}
              <div className="flex justify-center gap-10">
                <a href={`tel:${businessInfo.contact.phone}`} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-[#8abf96] hover:bg-[#6aaf78] transition-colors rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-gray-700 text-xs font-medium">Anrufen</span>
                </a>
                <a href={`mailto:${businessInfo.contact.email}`} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-[#8abf96] hover:bg-[#6aaf78] transition-colors rounded-full flex items-center justify-center shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-gray-700 text-xs font-medium">E-Mail</span>
                </a>
              </div>
            </div>
          </div>

          {/* ==== DESKTOP CONTENT ==== */}
          <div className="hidden md:flex flex-col flex-1 w-full relative justify-center py-12">
            
            {/* Top Container: Text + SVG */}
            <div className="relative w-full pb-16 lg:pb-24">
              
              {/* Desktop: Animation rechts */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none
                              w-[420px] opacity-60 lg:w-[520px] lg:opacity-70">
                <EnvelopeAnimation />
              </div>

              {/* Text */}
              <div className="relative z-10 max-w-6xl mx-auto w-full">
                <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
                  <Link href="/" className="hover:text-brand-green transition-colors">
                    Startseite
                  </Link>
                  <ChevronRight className="w-4 h-4" />
                  <span className="text-gray-900 font-medium">Kontakt</span>
                </nav>

                <div className="text-center max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <MessageCircle className="w-4 h-4" />
                    Wir freuen uns auf Ihre Nachricht
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Kontaktieren Sie uns
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Haben Sie Fragen oder wünschen ein unverbindliches Angebot?
                    <br />
                    Wir sind für Sie da – schnell, persönlich und unkompliziert.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Container: Contact Cards */}
            <div className="relative z-20 max-w-6xl mx-auto w-full">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {contactCards.map((card) => (
                  <div
                    key={card.title}
                    className="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-green/20 hover:-translate-y-1 flex flex-col items-center text-center"
                  >
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#8abf96] rounded-lg md:rounded-xl mb-3 md:mb-4 group-hover:bg-[#6aaf78] group-hover:scale-110 transition-all duration-300`}
                    >
                      <card.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">{card.title}</h3>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.title === "Adresse" ? "_blank" : undefined}
                        rel={card.title === "Adresse" ? "noopener noreferrer" : undefined}
                        className="text-gray-600 hover:text-brand-green transition-colors"
                      >
                        <p className="text-xs md:text-sm break-all md:break-normal">{card.content}</p>
                        {card.subContent && (
                          <p className="text-xs md:text-sm text-gray-500">{card.subContent}</p>
                        )}
                      </a>
                    ) : (
                      <>
                        <p className="text-xs md:text-sm text-gray-600">{card.content}</p>
                        {card.subContent && (
                          <p className="text-xs md:text-sm text-brand-green font-medium mt-1">
                            {card.subContent}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form & Map Section */}
        <section className="py-16 md:py-24 px-4 bg-section-gray">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 overflow-hidden">
                {/* Success overlay — sits on top of everything */}
                <SuccessOverlay
                  visible={showOverlay}
                  onDone={() => {
                    setShowOverlay(false);
                    setIsSubmitted(true);
                  }}
                />

                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Schreiben Sie uns
                  </h2>
                  <p className="text-gray-600">
                    Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                      <CheckCircle2 className="w-10 h-10 text-brand-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Vielen Dank!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns schnellstmöglich bei Ihnen.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="rounded-full border-brand-green text-brand-green hover:bg-green-50"
                    >
                      Weitere Nachricht senden
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Ihr vollständiger Name"
                          value={formState.name}
                          onChange={handleChange}
                          className="h-12 rounded-xl border-gray-200 focus:border-brand-green focus:ring-brand-green/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          E-Mail *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="ihre@email.de"
                          value={formState.email}
                          onChange={handleChange}
                          className="h-12 rounded-xl border-gray-200 focus:border-brand-green focus:ring-brand-green/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefon" className="text-gray-700 font-medium">
                        Telefon
                      </Label>
                      <Input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        placeholder="Ihre Telefonnummer (optional)"
                        value={formState.telefon}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-gray-200 focus:border-brand-green focus:ring-brand-green/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="nachricht" className="text-gray-700 font-medium">
                        Nachricht *
                      </Label>
                      <Textarea
                        id="nachricht"
                        name="nachricht"
                        required
                        placeholder="Wie können wir Ihnen helfen? Beschreiben Sie Ihr Anliegen..."
                        rows={5}
                        value={formState.nachricht}
                        onChange={handleChange}
                        className="rounded-xl border-gray-200 focus:border-brand-green focus:ring-brand-green/20 resize-none"
                      />
                    </div>

                    {/* Error message */}
                    {errorMsg && (
                      <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full h-14 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl text-lg font-semibold shadow-lg shadow-brand-green/25 transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/30"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Nachricht senden
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      Mit dem Absenden stimmen Sie unserer{" "}
                      <Link href="/datenschutz" className="text-brand-green hover:underline">
                        Datenschutzerklärung
                      </Link>{" "}
                      zu.
                    </p>
                  </form>
                )}
              </div>

              {/* Map & Info */}
              <div className="space-y-6">
                {/* Map */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  <div className="aspect-[4/3] w-full">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=8.5687%2C49.6603%2C8.6687%2C49.7003&layer=mapnik&marker=49.6803%2C8.6187"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Traumplatz Standort in Bensheim"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-r from-brand-green to-emerald-600 text-white">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Unser Standort</h3>
                        <p className="text-green-100">
                          {businessInfo.address.street}
                          <br />
                          {businessInfo.address.postalCode} {businessInfo.address.city}
                        </p>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(
                            `${businessInfo.address.street}, ${businessInfo.address.postalCode} ${businessInfo.address.city}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-3 text-white hover:text-green-200 transition-colors font-medium"
                        >
                          Route planen
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                      <MessageCircle className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Schnelle Antwort gewünscht?</h3>
                      <p className="text-green-100">Schreiben Sie uns auf WhatsApp</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="w-full h-14 bg-white text-green-600 hover:bg-green-50 rounded-xl font-semibold text-lg shadow-lg"
                  >
                    <a
                      href={`https://wa.me/${businessInfo.contact.whatsapp.replace(/\s+/g, "").replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp öffnen
                    </a>
                  </Button>
                </div>

                {/* Quick Call */}
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                    Lieber direkt sprechen?
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                    Rufen Sie uns an – wir beraten Sie gerne persönlich und unverbindlich.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button
                      asChild
                      size="lg"
                      className="w-full h-12 bg-brand-green hover:bg-brand-green-dark text-white rounded-xl"
                    >
                      <a href={`tel:${businessInfo.contact.phone}`}>
                        <Phone className="w-5 h-5" />
                        {businessInfo.contact.phoneDisplay}
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full h-12 border-gray-200 rounded-xl"
                    >
                      <a href={`tel:${businessInfo.contact.phone2}`}>
                        <Phone className="w-5 h-5" />
                        {businessInfo.contact.phone2Display}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Warum Traumplatz?
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
              Seit 2020 vertrauen uns über 100 zufriedene Kunden in der Region Bergstraße
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "24/7", label: "Erreichbar" },
                { value: "100+", label: "Zufriedene Kunden" },
                { value: "< 24h", label: "Antwortzeit" },
                { value: "100%", label: "Fachkräfte" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-brand-green mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
