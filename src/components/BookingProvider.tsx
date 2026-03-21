"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface BookingContextValue {
  isOpen: boolean;
  selectedTour: number | "private" | null;
  openBooking: (tour?: number | "private") => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<number | "private" | null>(null);

  const openBooking = useCallback((tour?: number | "private") => {
    setSelectedTour(tour ?? null);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setSelectedTour(null);
  }, []);

  return (
    <BookingContext.Provider value={{ isOpen, selectedTour, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}
