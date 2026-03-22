"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle, MessageCircle } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { useBooking } from "./BookingProvider";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function BookingModal() {
  const { isOpen, selectedTour, closeBooking } = useBooking();
  const { dict, locale } = useDictionary();
  const t = dict.bookingForm;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const submittedDataRef = useRef<{
    tourName: string;
    date: string;
    time: string;
    people: string;
    language: string;
    email: string;
  } | null>(null);

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  function handleClose() {
    closeBooking();
    setStatus("idle");
    submittedDataRef.current = null;
    formRef.current?.reset();
  }

  // Tomorrow's date for min
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

  // Tour names from dict
  const tourNames = dict.experiences.tours.map(
    (tour: { title: string }) => tour.title
  );

  // Map selectedTour to select value
  function getDefaultTourValue(): string {
    if (selectedTour === "private") return "private";
    if (typeof selectedTour === "number" && selectedTour >= 0 && selectedTour < tourNames.length) {
      return String(selectedTour);
    }
    return "";
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    const tourValue = data.get("tour") as string;
    const tourName =
      tourValue === "private"
        ? t.privateTourOption
        : tourNames[Number(tourValue)] ?? "";
    const people = data.get("people") as string;
    const rawDate = data.get("date") as string;
    const fullName = data.get("fullName") as string;

    const time = data.get("time") as string;
    const language = data.get("language") as string;
    const email = data.get("email") as string;

    // Format date from YYYY-MM-DD to DD/MM/YYYY
    const [y, m, d] = rawDate.split("-");
    const date = `${d}/${m}/${y}`;

    // Save for WhatsApp link on success screen
    submittedDataRef.current = { tourName, date, time, people, language, email };

    const whatsappNumber = data.get("whatsapp") as string;
    const message = (data.get("message") as string) || "-";

    const body = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_KEY",
      subject: `Nueva reserva / New booking: ${tourName} — ${people} pax — ${date}`,
      from_name: fullName,
      "Tour / Tour": tourName,
      "Fecha / Date": date,
      "Horario / Time": time,
      "Personas / People": people,
      "Idioma / Language": language,
      "Nombre / Name": fullName,
      "Email / Email": email,
      "WhatsApp": whatsappNumber,
      "Mensaje / Message": message,
      "Términos aceptados / Terms accepted": "Sí / Yes",
      botcheck: "",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1E293B] bg-white focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:border-transparent transition-colors";
  const labelClass = "block text-sm font-medium text-[#1E293B] mb-1.5";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full bg-white sm:max-w-lg sm:my-8 sm:rounded-2xl sm:shadow-2xl min-h-screen sm:min-h-0 sm:max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
              <h2
                id="booking-modal-title"
                className="text-xl font-bold text-[#0C4A6E] font-[var(--font-heading)]"
              >
                {t.title}
              </h2>
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X size={20} className="text-[#64748B]" />
              </button>
            </div>

            <div className="px-6 pb-6 pt-4">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-[#0C4A6E] mb-2">
                    {t.successTitle}
                  </h3>
                  <p className="text-[#64748B] mb-6 max-w-sm">
                    {t.successMessage}
                  </p>
                  {submittedDataRef.current && (
                    <a
                      href={`https://wa.me/34671201007?text=${encodeURIComponent(
                        `¡Hola Dani! 👋 Acabo de enviar una solicitud de reserva / I just submitted a booking request:\n\n🏃 Tour: ${submittedDataRef.current.tourName}\n📅 Fecha / Date: ${submittedDataRef.current.date}\n⏰ Horario / Time: ${submittedDataRef.current.time}\n👥 Personas / People: ${submittedDataRef.current.people}\n🗣️ Idioma / Language: ${submittedDataRef.current.language}\n📧 Email: ${submittedDataRef.current.email}\n\n¡Con ganas de correr! / Looking forward to running with you!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold rounded-full px-8 py-3.5 transition-all duration-300 inline-flex items-center justify-center gap-2 mb-4"
                    >
                      <MessageCircle size={20} />
                      {t.whatsappButton}
                    </a>
                  )}
                  <button
                    onClick={handleClose}
                    className="text-sm text-[#64748B] hover:text-[#1E293B] underline transition-colors"
                  >
                    {t.closeButton}
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate={false}>
                  {/* Error banner */}
                  {status === "error" && (
                    <div className="mb-5 bg-red-50 border border-red-200 rounded-xl p-4">
                      <p className="text-sm text-red-700">{t.errorMessage}</p>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="mt-2 text-sm font-semibold text-red-700 underline"
                      >
                        {t.tryAgain}
                      </button>
                    </div>
                  )}

                  <div className="space-y-5">
                    {/* Tour */}
                    <div>
                      <label htmlFor="booking-tour" className={labelClass}>
                        {t.tourLabel}
                      </label>
                      <select
                        id="booking-tour"
                        name="tour"
                        required
                        autoFocus
                        defaultValue={getDefaultTourValue()}
                        className={inputClass}
                      >
                        <option value="" disabled>
                          {t.tourPlaceholder}
                        </option>
                        {tourNames.map((name: string, i: number) => (
                          <option key={i} value={String(i)}>
                            {name}
                          </option>
                        ))}
                        <option value="private">{t.privateTourOption}</option>
                      </select>
                    </div>

                    {/* Date + Time grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="booking-date" className={labelClass}>
                          {t.dateLabel}
                        </label>
                        <input
                          type="date"
                          id="booking-date"
                          name="date"
                          required
                          min={tomorrow}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-time" className={labelClass}>
                          {t.timeLabel}
                        </label>
                        <select
                          id="booking-time"
                          name="time"
                          required
                          defaultValue=""
                          className={inputClass}
                        >
                          <option value="" disabled>
                            {t.timePlaceholder}
                          </option>
                          <option value="Early Morning (7:00)">
                            {t.timeOptions.earlyMorning}
                          </option>
                          <option value="Morning (9:00)">
                            {t.timeOptions.morning}
                          </option>
                          <option value="Sunset (18:00)">
                            {t.timeOptions.sunset}
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* People + Language grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="booking-people" className={labelClass}>
                          {t.peopleLabel}
                        </label>
                        <input
                          type="number"
                          id="booking-people"
                          name="people"
                          required
                          min={1}
                          max={10}
                          defaultValue={2}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="booking-language" className={labelClass}>
                          {t.languageLabel}
                        </label>
                        <select
                          id="booking-language"
                          name="language"
                          required
                          defaultValue=""
                          className={inputClass}
                        >
                          <option value="" disabled>
                            {t.languagePlaceholder}
                          </option>
                          <option value="English">
                            {t.languageOptions.english}
                          </option>
                          <option value="Spanish">
                            {t.languageOptions.spanish}
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="booking-name" className={labelClass}>
                        {t.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="booking-name"
                        name="fullName"
                        required
                        placeholder={t.namePlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="booking-email" className={labelClass}>
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="booking-email"
                        name="email"
                        required
                        placeholder={t.emailPlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label htmlFor="booking-whatsapp" className={labelClass}>
                        {t.whatsappLabel}
                      </label>
                      <input
                        type="tel"
                        id="booking-whatsapp"
                        name="whatsapp"
                        required
                        placeholder={t.whatsappPlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="booking-message" className={labelClass}>
                        {t.messageLabel}
                      </label>
                      <textarea
                        id="booking-message"
                        name="message"
                        rows={3}
                        placeholder={t.messagePlaceholder}
                        className={inputClass}
                      />
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-3 pt-2">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          required
                          className="mt-1 accent-[#F97316] h-4 w-4 shrink-0"
                        />
                        <span className="text-sm text-[#64748B]">
                          {t.acceptTermsText}{" "}
                          <a
                            href={`/${locale}/terms`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F97316] underline hover:text-[#EA580C]"
                          >
                            {t.termsLink}
                          </a>{" "}
                          {t.and}{" "}
                          <a
                            href={`/${locale}/waiver`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F97316] underline hover:text-[#EA580C]"
                          >
                            {t.waiverLink}
                          </a>
                        </span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="acceptPrivacy"
                          required
                          className="mt-1 accent-[#F97316] h-4 w-4 shrink-0"
                        />
                        <span className="text-sm text-[#64748B]">
                          {t.acceptPrivacyText}{" "}
                          <a
                            href={`/${locale}/privacy`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#F97316] underline hover:text-[#EA580C]"
                          >
                            {t.privacyLink}
                          </a>
                        </span>
                      </label>
                    </div>

                    {/* Honeypot */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: "none" }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold rounded-full px-8 py-3.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          {t.sending}
                        </>
                      ) : (
                        t.submitButton
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
