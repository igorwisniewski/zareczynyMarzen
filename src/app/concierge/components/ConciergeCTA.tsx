// components/ConciergeCTA.js
"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ConciergeCTA() {
    const container = useRef(null);
    useGSAP(() => {
        gsap.from(".cta-element", {
            scrollTrigger: { trigger: container.current, start: "top 80%" },
            opacity: 0, y: 50, stagger: 0.3, duration: 1, ease: 'power3.out'
        });
    }, { scope: container });

    return(
        <section ref={container} className="py-28 sm:py-32 bg-brand-50 text-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="cta-element font-serif text-4xl md:text-5xl font-bold text-brand-900">A jakie jest Twoje marzenie?</h2>
                <p className="cta-element mt-6 text-lg text-brand-800">Skontaktuj się z nami, aby rozpocząć rozmowę. Nasza pierwsza konsultacja jest zawsze bezpłatna i niezobowiązująca.</p>
                <div className="cta-element mt-10">
                    <Link href="/kontakt" className="bg-brand-500 hover:bg-brand-600 text-white px-10 py-4 rounded-md transition-colors duration-300 font-semibold text-lg shadow-lg">
                        Napisz do nas
                    </Link>
                </div>
            </div>
        </section>
    );
}