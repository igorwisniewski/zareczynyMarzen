// components/ContactFormMap.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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
        <section ref={container} className="relative py-20 sm:py-28 w-full min-h-[80vh] flex items-center justify-center">
            {/* Mapa jako tło */}
            <div className="absolute inset-0 z-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46880.74095491783!2d21.894853451599808!3d53.401826580449274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471e26d23081bd29%3A0x9cdda2fcff7552cd!2sKolno!5e1!3m2!1spl!2spl!4v1751452088908!5m2!1spl!2spl"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>


            {/* Formularz na wierzchu */}
            <div className="contact-form-wrapper relative z-10 w-full max-w-2xl mx-auto px-4 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md p-8 lg:p-12 border-2 border-brand-300 rounded-lg shadow-2xl pointer-events-auto">
                    <h3 className="font-serif text-3xl font-bold mb-6 text-center text-gray-900">Napisz do nas</h3>
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Imię</label>
                            <input type="text" name="name" id="name" placeholder="Imię" className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                        </div>
                        <div>
                            <label htmlFor="phone" className="sr-only">Telefon</label>
                            <input type="tel" name="phone" id="phone" placeholder="Telefon" className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"/>
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Treść</label>
                            <textarea name="message" id="message" rows="4" placeholder="Treść" className="block text-black w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-3 bg-gray-50"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border-2 border-brand-500 rounded-md shadow-sm text-base font-medium text-brand-600 bg-transparent hover:bg-brand-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors">
                                Wyślij
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}