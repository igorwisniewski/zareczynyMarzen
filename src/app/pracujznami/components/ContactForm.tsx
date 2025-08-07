// components/CareersContact.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

//

// ZMIANA: Używamy zdefiniowanego typu dla propsów
export default function CareersContact() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".form-container", {
            scrollTrigger: { trigger: container.current, start: "top 80%", toggleActions: "play none none none" },
            opacity: 0, y: 50, duration: 1, ease: 'power3.out'
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-20 sm:py-28 bg-rose-50">
            <div className="form-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 lg:p-12 border-2 border-brand-200 rounded-lg shadow-xl">
                    <h2 className="font-serif text-3xl font-bold mb-2 text-center text-gray-900">Zainteresowany/a? Porozmawiajmy!</h2>
                    <p className="text-center text-gray-600 mb-8">Wypełnij formularz lub wyślij aplikację bezpośrednio na nasz adres e-mail.</p>
                    <form action="https://formspree.io/f/TWOJ_FORM_ID" method="POST" encType="multipart/form-data" className="space-y-6">
                        {/* ... (pola Imię, Email itp. bez zmian) ... */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i Nazwisko</label>
                                <input type="text" name="name" id="name" required className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adres Email</label>
                                <input type="email" name="email" id="email" required className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Interesujące stanowisko</label>
                            <select
                                id="position"
                                name="position"


                                className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"
                            >
                                <option value="">Wybierz stanowisko...</option>
                                <option>Event Manager</option>
                                <option>Asystent/ka ds. Organizacji Wesel</option>
                                <option>Aplikacja spontaniczna</option>
                            </select>
                        </div>
                        {/* ... (reszta formularza bez zmian) ... */}
                        <div>
                            <label htmlFor="cv-upload" className="block text-sm font-medium text-gray-700 mb-1">Załącz CV (plik .pdf)</label>
                            <input type="file" name="upload" id="cv-upload" accept=".pdf" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-rose-100 file:text-rose-700 hover:file:bg-rose-200"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Krótka wiadomość (opcjonalnie)</label>
                            <textarea name="message" id="message" rows={4} placeholder="Napisz kilka słów o sobie..." className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border-2 border-brand-500 rounded-md shadow-sm text-base font-medium text-brand-600 bg-transparent hover:bg-brand-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors">
                                Aplikuj
                            </button>
                        </div>
                    </form>
                    <p className="text-xs text-center text-gray-500 mt-6">
                        Klikając &#34;Aplikuj&#34;, zgadzasz się na przetwarzanie Twoich danych osobowych w celu przeprowadzenia procesu rekrutacji.
                    </p>
                </div>
            </div>
        </section>
    );
}