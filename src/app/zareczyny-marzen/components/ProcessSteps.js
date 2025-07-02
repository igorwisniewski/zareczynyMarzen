// components/ProcessSteps.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { num: 1, title: "Bezpłatna Konsultacja", description: "Zaczynamy od rozmowy, by poznać Wasze marzenia, wizje i oczekiwania." },
    { num: 2, title: "Koncepcja i Oferta", description: "Tworzymy spersonalizowany scenariusz i przedstawiamy transparentną ofertę." },
    { num: 3, title: "Organizacja i Dopracowanie", description: "Zajmujemy się wszystkimi detalami, od rezerwacji po koordynację podwykonawców." },
    { num: 4, title: "Niezapomniane 'Tak'", description: "W dniu zaręczyn czuwamy nad wszystkim, byście mogli skupić się tylko na sobie." },
];

export default function ProcessSteps() {
    const container = useRef(null);

    useGSAP(() => {
        // --- 1. Animacja nagłówka ---
        gsap.from(".section-header", {
            scrollTrigger: { trigger: ".section-header", start: "top 85%", toggleActions: "play none none none" },
            opacity: 0,
            y: 40,
            duration: 1,
            ease: 'power3.out'
        });

        // --- 2. Animacja "rysowania" linii łączącej kroki ---
        gsap.from(".connecting-line-fg", {
            scrollTrigger: {
                trigger: ".steps-grid", // Wyzwalaczem jest siatka z krokami
                start: "top center",
                end: "bottom center",
                scrub: 1, // "Przykleja" animację do paska przewijania
            },
            scaleX: 0, // Animujemy skalę w poziomie od 0 do 1
            transformOrigin: "left center", // Zapewnia rysowanie od lewej do prawej
            ease: "none"
        });

        // --- 3. Szczegółowa animacja dla każdej karty ---
        const cards = gsap.utils.toArray('.step-card');
        cards.forEach(card => {
            const tl = gsap.timeline({
                scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" }
            });
            tl.from(card.querySelector('.step-circle'), { scale: 0, opacity: 0, ease: 'back.out(1.7)', duration: 0.6 })
                .from(card.querySelector('.step-title'), { y: 20, opacity: 0, ease: 'power2.out', duration: 0.5 }, "-=0.4")
                .from(card.querySelector('.step-desc'), { y: 20, opacity: 0, ease: 'power2.out', duration: 0.5 }, "-=0.3");
        });

    }, { scope: container });

    return(
        <section ref={container} className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="section-header text-center mb-20">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">Twoja Droga do Niezapomnianego &#34;Tak&#34;</h2>
                </div>

                {/* Kontener dla siatki i linii - musi być 'relative' */}
                <div className="relative">
                    {/* Linia łącząca w tle */}
                    <div className="absolute top-8 left-0 right-0 h-0.5 bg-brand-200 w-full hidden lg:block">
                        <div className="connecting-line-fg h-full bg-brand-500"></div>
                    </div>

                    <div className="steps-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative">
                        {steps.map(step => (
                            <div key={step.num} className="step-card text-center flex flex-col items-center">
                                <div className="step-circle w-16 h-16 mb-5 rounded-full border-2 bg-white border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white flex items-center justify-center font-serif text-2xl font-bold z-10">
                                    {step.num}
                                </div>
                                <h3 className="step-title text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                                <p className="step-desc text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}