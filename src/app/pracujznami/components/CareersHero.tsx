// components/CareersHero.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CareersHero() {
    const container = useRef(null);
    useGSAP(() => {
        gsap.to(".hero-bg", { scale: 1.1, duration: 10, ease: "none" });
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });
        tl.from(".hero-el", { y: 50, opacity: 0, stagger: 0.3, delay: 0.5 });
    }, { scope: container });

    return(
        <section ref={container} className="relative h-[100vh] w-full flex items-center justify-center text-white text-center overflow-hidden items-center">
            <div className="hero-bg absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/careers-hero.jpg')" }}></div>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 p-4">
                <h1 className="hero-el font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">Współtwórz Niezapomniane Historie</h1>
                <p className="hero-el text-lg md:text-xl max-w-3xl mx-auto">
                    Jesteśmy czymś więcej niż firmą – jesteśmy zespołem pasjonatów, którzy zamieniają marzenia w rzeczywistość. Jeśli kreatywność i dbałość o detal to Twoje drugie imię, dołącz do nas.
                </p>
            </div>
        </section>
    );
};