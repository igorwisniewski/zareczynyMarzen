// components/MemoryCreators.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SunIcon, FireIcon, GlobeAltIcon, BuildingLibraryIcon, HeartIcon, StarIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const memories = [
    { icon: <GlobeAltIcon className="w-8 h-8"/>, title: "Zaręczyny na szczycie", description: "Romantyczna kolacja z panoramicznym widokiem na miasto." },
    { icon: <SunIcon className="w-8 h-8"/>, title: "Propozycja na plaży", description: "Prywatna plaża o zachodzie słońca, szum fal i tylko Wy dwoje." },
    { icon: <FireIcon className="w-8 h-8"/>, title: "Intymne i kameralne", description: "Niespodzianka w domowym zaciszu, pełna osobistych akcentów." },
    { icon: <BuildingLibraryIcon className="w-8 h-8"/>, title: "W historycznym zamku", description: "Bajkowa sceneria, która przeniesie Was w czasie i doda magii." },
    { icon: <HeartIcon className="w-8 h-8"/>, title: "Ogród pełen kwiatów", description: "Prywatny ogród botaniczny, tysiące świec i muzyka na żywo." },
    { icon: <StarIcon className="w-8 h-8"/>, title: "Pod gołym niebem", description: "Noc pod gwiazdami w luksusowym glampingu z teleskopem." },
];

export default function MemoryCreators() {
    const container = useRef(null);

    useGSAP(() => {
        // --- 1. Animacja dla nagłówka ---
        gsap.from(".section-header > *", {
            scrollTrigger: { trigger: ".section-header", start: "top 85%", toggleActions: "play none none none" },
            opacity: 0, y: 40, stagger: 0.2, duration: 0.8, ease: 'power3.out'
        });

        const cards = gsap.utils.toArray('.memory-card');

        // --- 2. Zaawansowana animacja wejściowa dla każdej karty z osobna ---
        cards.forEach(card => {
            const tl = gsap.timeline({
                scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" }
            });
            tl.from(card.querySelector('.icon-wrapper'), { scale: 0, opacity: 0, ease: 'back.out(1.7)', duration: 0.6 })
                .from(card.querySelector('.card-title'), { x: -30, opacity: 0, ease: 'power2.out', duration: 0.5 }, "-=0.4")
                .from(card.querySelector('.card-desc'), { x: -20, opacity: 0, ease: 'power2.out', duration: 0.5 }, "-=0.3");
        });

        // --- 3. Efekt paralaksy dla kolumn podczas scrollowania ---
        const firstCol = gsap.utils.toArray('.memory-card:nth-child(3n+1)');
        const secondCol = gsap.utils.toArray('.memory-card:nth-child(3n+2)');
        const thirdCol = gsap.utils.toArray('.memory-card:nth-child(3n+3)');

        gsap.to(firstCol, { y: -60, ease: "none", scrollTrigger: { trigger: ".memory-grid", scrub: 1 }});
        gsap.to(secondCol, { y: 40, ease: "none", scrollTrigger: { trigger: ".memory-grid", scrub: 1 }});
        gsap.to(thirdCol, { y: -30, ease: "none", scrollTrigger: { trigger: ".memory-grid", scrub: 1 }});

        // --- 4. Interaktywny efekt 3D na hover ---
        cards.forEach(card => {
            const rotX = gsap.quickTo(card, "rotationX", { duration: 0.8, ease: "power3" });
            const rotY = gsap.quickTo(card, "rotationY", { duration: 0.8, ease: "power3" });

            card.addEventListener("mousemove", e => {
                const { clientX, clientY } = e;
                const { height, width, left, top } = card.getBoundingClientRect();
                const x = gsap.utils.mapRange(0, width, -15, 15, clientX - left);
                const y = gsap.utils.mapRange(0, height, 15, -15, clientY - top);
                rotX(y);
                rotY(x);
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, { rotationX: 0, rotationY: 0, duration: 1, ease: "elastic.out(1, 0.5)" });
            });
        });

    }, { scope: container });

    return(
        <section ref={container} className="py-20 sm:py-28 bg-brand-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="section-header text-center mb-16">
                    <h2 className="font-serif text-4xl font-bold text-gray-900">Kreatorzy Wspomnień</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 mt-4">Każda para to inna historia. Tworzymy scenariusze zaręczyn tak unikalne, jak Wasza miłość.</p>
                </div>
                {/* Ustawiamy perspektywę dla efektu 3D */}
                <div className="memory-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
                    {memories.map(item => (
                        <div key={item.title} className="memory-card bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg text-center border border-gray-200" style={{ transformStyle: "preserve-3d" }}>
                            <div className="icon-wrapper mx-auto w-16 h-16 mb-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center border-2 border-white shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="card-title text-xl font-semibold mb-2 text-black">{item.title}</h3>
                            <p className="card-desc text-gray-500">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}