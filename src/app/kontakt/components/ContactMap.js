// components/ContactFormMap.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ContactFormMap() {
    const container = useRef(null);

    // ... kod GSAP bez zmian ...
    useGSAP(() => {
        gsap.from(".contact-form-wrapper", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            scale: 0.95,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    }, { scope: container });

    // 1. Definiujemy funkcję obsługującą wysłanie formularza
    const handleSubmit = (event) => {
        // Zatrzymujemy domyślną akcję wysyłania formularza
        event.preventDefault();

        // UWAGA: Wklej tutaj swój unikalny identyfikator konwersji z Google Ads
        const conversionId = 'AW-17526203888/Twoj_Identyfikator_Konwersji';

        // Sprawdzamy, czy funkcja gtag istnieje, i wysyłamy zdarzenie konwersji
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
                'send_to': conversionId,
            });
        }

        // Odczekujemy 200 milisekund, aby dać czas na zarejestrowanie zdarzenia
        setTimeout(() => {
            // Po odczekaniu, programowo wysyłamy formularz
            event.target.submit();
        }, 200);
    };

    return (
        <section ref={container} className="relative py-20 sm:py-28 w-full min-h-[80vh] flex items-center justify-center">
            {/* Mapa jako tło */}
            <div className="absolute inset-0 z-0">
                <iframe
                    src="http://googleusercontent.com/maps.google.com/3"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Formularz na wierzchu */}
            <div className="contact-form-wrapper relative z-10 w-full max-w-3xl mx-auto px-4 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md p-8 lg:p-12 border-2 border-brand-300 rounded-lg shadow-2xl pointer-events-auto">
                    <h3 className="font-serif text-3xl font-bold mb-6 text-center text-gray-900">Zapytaj o termin</h3>

                    {/* 2. Podpinamy naszą funkcję do zdarzenia onSubmit formularza */}
                    <form
                        action="https://formspree.io/f/movwblao"
                        method="POST"
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        {/* ... wszystkie pola formularza bez zmian ... */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i Nazwisko</label>
                                <input type="text" name="name" id="name" placeholder="Jan Kowalski" required className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                                <input type="tel" name="phone" id="phone" placeholder="+48 123 456 789" required className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" name="email" id="email" placeholder="twoj@email.com" required className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                            <div>
                                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">Rodzaj uroczystości</label>
                                <select id="eventType" name="eventType" className="block text-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50">
                                    <option>Wesele</option>
                                    <option>Zaręczyny</option>
                                    <option>Inne wydarzenie</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">Planowana data</label>
                                <input type="date" name="eventDate" id="eventDate" className="block text-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                            </div>
                            <div>
                                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Szacowana liczba gości</label>
                                <input type="number" name="guests" id="guests" placeholder="np. 100" className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Przewidywany budżet</label>
                                <select id="budget" name="budget" className="block text-gray-700 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50">
                                    <option>do 50 000 PLN</option>
                                    <option>50 000 - 100 000 PLN</option>
                                    <option>100 000 - 200 000 PLN</option>
                                    <option>powyżej 200 000 PLN</option>
                                    <option>Elastyczny / do omówienia</option>
                                </select>
                            </div>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Opowiedz nam o swoich marzeniach</label>
                            <textarea name="message" id="message" rows="4" placeholder="Opisz swoją wizję, motyw przewodni, lub zadaj nam pytanie..." className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"></textarea>
                        </div>
                        <div className="pt-6 flex items-center space-x-2 text-gray-600">
                            <input required type="checkbox" id="privacy-policy" name="privacy-policy" className="h-4 w-4 rounded border-gray-300 text-brand-600 focus:ring-brand-500"/>
                            <label htmlFor="privacy-policy" className="text-sm">
                                Wyrażam zgodę na naszą <Link href="/polityka-prywatnosci" className="underline text-brand-600 hover:text-brand-700">Politykę Prywatności</Link>
                            </label>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border-2 border-brand-500 rounded-md shadow-sm text-base font-medium text-brand-600 bg-transparent hover:bg-brand-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors">
                                Wyślij zapytanie
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}