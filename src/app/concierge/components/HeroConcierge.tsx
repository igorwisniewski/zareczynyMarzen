// components/HeroConcierge.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroConcierge() {
    const container = useRef(null);
    useGSAP(() => {
        gsap.to(".hero-bg", { scale: 1.1, duration: 10, ease: "none" });
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });
        tl.from(".hero-el", { y: 50, opacity: 0, stagger: 0.3, delay: 0.5 });
    }, { scope: container });

    return(
        <section ref={container} className="relative h-screen w-full flex items-center justify-center text-white text-center overflow-hidden">
            <div className="hero-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/conciergehero.jpg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
            <div className="relative z-10 p-4">
                <h1 className="hero-el font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">Twoje Marzenie. Nasza Misja.</h1>
                <p className="hero-el text-lg md:text-xl max-w-3xl mx-auto">Niemożliwe? Dla nas to tylko punkt wyjścia. Usługi concierge to sztuka kreowania niezwykłych doświadczeń, które przekraczają granice wyobraźni.</p>
            </div>
        </section>
    );
};