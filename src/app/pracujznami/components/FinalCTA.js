// components/FinalCTA.js
"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
    const container = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: { trigger: container.current, start: "top 80%", toggleActions: "play none none none" }
        });
        tl.from(".cta-element", { opacity: 0, y: 50, stagger: 0.3, duration: 1, ease: 'power3.out' });
    }, { scope: container });

    return(
        <section ref={container} className="relative py-28 sm:py-32 bg-gray-800 text-white text-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/tlo-cta.jpg')" }}></div>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 p-4">
                <h2 className="cta-element font-serif text-4xl md:text-5xl font-bold mb-8">Spełniamy Twoje Marzenia</h2>
                <div className="cta-element flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/kontakt" className="bg-brand-500 hover:bg-white hover:text-brand-800 text-white px-8 py-3 rounded-md transition-colors duration-300 font-semibold">
                        Umów Konsultację
                    </Link>
                    <Link href="/galeria" className="border-2 border-rose-300 text-white px-8 py-3 rounded-md font-semibold hover:bg-rose-300 hover:text-black transition-colors duration-300">
                        Zobacz Realizacje
                    </Link>
                </div>
            </div>
        </section>
    );
}