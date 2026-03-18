"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";

const COOKIE_CONSENT_KEY = "cookie-consent";
const CONSENT_MAX_AGE_MS = 24 * 30 * 24 * 60 * 60 * 1000; // ~24 months

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
};

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as ConsentState;
    if (Date.now() - parsed.timestamp > CONSENT_MAX_AGE_MS) {
      localStorage.removeItem(COOKIE_CONSENT_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
}

export default function CookieBanner() {
  const { dict } = useDictionary();
  const [visible, setVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
    }
  }, []);

  function handleAcceptAll() {
    saveConsent({ necessary: true, analytics: true, timestamp: Date.now() });
    setVisible(false);
  }

  function handleRejectAll() {
    saveConsent({ necessary: true, analytics: false, timestamp: Date.now() });
    setVisible(false);
  }

  function handleSavePreferences() {
    saveConsent({ necessary: true, analytics: analyticsEnabled, timestamp: Date.now() });
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4"
        >
          <div className="mx-auto max-w-2xl rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
            {!showConfig ? (
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Cookie size={24} className="text-[#F97316] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1E293B] leading-relaxed">
                    {dict.cookieBanner.message}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
                  >
                    {dict.cookieBanner.accept}
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="flex-1 bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
                  >
                    {dict.cookieBanner.reject}
                  </button>
                  <button
                    onClick={() => setShowConfig(true)}
                    className="flex-1 border border-gray-300 hover:border-gray-400 text-[#1E293B] font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
                  >
                    {dict.cookieBanner.configure}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Shield size={18} className="text-[#0C4A6E] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-[#1E293B]">
                          {dict.cookieBanner.necessary}
                        </p>
                        <p className="text-xs text-[#64748B] mt-0.5">
                          {dict.cookieBanner.necessaryDescription}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-[#0C4A6E] bg-[#0C4A6E]/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {dict.cookieBanner.alwaysActive}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Cookie size={18} className="text-[#F97316] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-[#1E293B]">
                          {dict.cookieBanner.analytics}
                        </p>
                        <p className="text-xs text-[#64748B] mt-0.5">
                          {dict.cookieBanner.analyticsDescription}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                      className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
                        analyticsEnabled ? "bg-[#F97316]" : "bg-gray-300"
                      }`}
                      role="switch"
                      aria-checked={analyticsEnabled}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                          analyticsEnabled ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
                  >
                    {dict.cookieBanner.save}
                  </button>
                  <button
                    onClick={() => setShowConfig(false)}
                    className="flex-1 border border-gray-300 hover:border-gray-400 text-[#1E293B] font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
                  >
                    {dict.cookieBanner.reject}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Export utility to reset consent (used by "Cookie Settings" link in footer)
export function resetCookieConsent() {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.location.reload();
}
