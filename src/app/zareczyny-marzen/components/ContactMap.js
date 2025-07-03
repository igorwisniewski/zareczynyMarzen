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

    return(
        <section ref={container}
                 className="relative py-20 sm:py-28 w-full min-h-[80vh] flex items-center justify-center">
            {/* Mapa jako tło */}
            <div className="absolute inset-0 z-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46880.74095491783!2d21.894853451599808!3d53.401826580449274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e26d23081bd29%3A0x9cdda2fcff7552cd!2sKolno!5e1!3m2!1spl!2spl!4v1751452088908!5m2!1spl!2spl"
                    className="w-full h-full"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>


            {/* Formularz na wierzchu */}
            <div className="contact-form-wrapper relative z-10 w-full max-w-2xl mx-auto px-4 pointer-events-none">
                <div
                    className="bg-white/95 backdrop-blur-md p-8 lg:p-12 border-2 border-brand-300 rounded-lg shadow-2xl pointer-events-auto">
                    <h3 className="font-serif text-3xl font-bold mb-6 text-center text-gray-900">Napisz do nas</h3>
                    {/* Pamiętaj, aby podmienić link na swój własny z serwisu Formspree.io */}
                    <form action="https://formspree.io/f/movwblao" method="POST" className="space-y-6">

                        {/* --- Podstawowe dane kontaktowe --- */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Twoje
                                    Imię i Nazwisko</label>
                                <input type="text" name="Imię i Nazwisko" id="name" placeholder="Jan Kowalski" required
                                       className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                            </div>
                            <div>
                                <label htmlFor="partnerName" className="block text-sm font-medium text-gray-700 mb-1">Imię
                                    Partnerki / Partnera</label>
                                <input type="text" name="Imię Partnera/ki" id="partnerName" placeholder="Anna Nowak"
                                       required
                                       className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Twój
                                    Email</label>
                                <input type="email" name="Email" id="email" placeholder="twoj@email.com" required
                                       className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Twój
                                    Telefon</label>
                                <input type="tel" name="Telefon" id="phone" placeholder="+48 123 456 789"
                                       className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                            </div>
                        </div>

                        {/* --- Szczegóły dotyczące zaręczyn --- */}
                        <div className="pt-6 border-t border-gray-200">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">Preferowana
                                        data zaręczyn</label>
                                    <input type="date" name="Data zaręczyn" id="eventDate"
                                           className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                                </div>
                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Lokalizacja
                                        / Miasto</label>
                                    <input type="text" name="Lokalizacja" id="location"
                                           placeholder="np. Warszawa, góry, plaża"
                                           className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                                </div>
                                <div>
                                    <label htmlFor="helpType" className="block text-sm font-medium text-gray-700 mb-1">Jak
                                        możemy pomóc?</label>
                                    <select id="helpType" name="Rodzaj pomocy"
                                            className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50">
                                        <option>Pełna organizacja zaręczyn</option>
                                        <option>Pomoc w znalezieniu miejsca</option>
                                        <option>Stworzenie unikalnego scenariusza</option>
                                        <option>Koordynacja w dniu zaręczyn</option>
                                        <option>Tylko konsultacja</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Szacowany
                                        budżet</label>
                                    <select id="budget" name="Budżet"
                                            className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand brand-500 focus:ring-brand-500 p-3 bg-gray-50">
                                        <option>do 5 000 PLN</option>
                                        <option>5 000 - 10 000 PLN</option>
                                        <option>10 000 - 20 000 PLN</option>
                                        <option>powyżej 20 000 PLN</option>
                                        <option>Chcę omówić / elastyczny</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        {/* Treść wiadomości */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Opisz
                                swoją wizję lub zadaj pytanie</label>
                            <textarea name="Wiadomość" id="message" rows="5"
                                      placeholder="Opowiedz nam o swojej wymarzonej chwili, o Waszej historii, o tym co lubi Twoja druga połówka..."
                                      required
                                      className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"></textarea>
                        </div>
                        <div className="pt-6 text-gray-600">
                            <input required type="checkbox" id="checkbox" className=" text-sm font-medium text-gray-700 mb-1"/> Wyrażam zgodę na naszą <Link href="/polityka-prywatnosci">Politykę Prywatności</Link>
                        </div>
                        {/* Przycisk Wyślij */}
                        <div>
                            <button type="submit"
                                    className="w-full flex justify-center py-3 px-4 border-2 border-brand-500 rounded-md shadow-sm text-base font-medium text-brand-600 bg-transparent hover:bg-brand-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors">
                                Wyślij zapytanie
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}