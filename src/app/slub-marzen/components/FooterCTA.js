// components/FooterCTA.js
"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Rejestracja wtyczki GSAP
gsap.registerPlugin(ScrollTrigger);

export default function FooterCTA() {
    const container = useRef(null);

    useGSAP(() => {
        // Tworzymy oś czasu, która uruchomi się po przewinięciu do sekcji
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
                toggleActions: "play none none none",
            }
        });

        // Animujemy pojawienie się nagłówka i przycisku
        tl.from(".cta-title", { opacity: 0, y: 40, duration: 1, ease: "power3.out" })
            .from(".cta-button", { opacity: 0, y: 40, duration: 1, ease: "power3.out" }, "-=0.7");

    }, { scope: container });

    return (
        <section ref={container} className="relative py-24 bg-gray-800 text-white text-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/tlo-cta.jpg')" }}></div>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 p-4">
                <h2 className="cta-title font-serif text-4xl font-bold mb-8">Spełniamy Twoje Marzenia</h2>
                <div className="cta-button bg-brandGold-500 p-1 rounded-lg inline-block shadow-lg">
                    <Link href="/kontakt" className="block bg-brand-500 text-white border-brand-500 border-2 px-10 py-3 rounded-md font-semibold hover:bg-white hover:text-brand-500 transition-colors duration-300">
                        Skontaktuj się
                    </Link>
                </div>
            </div>
        </section>
    );
}