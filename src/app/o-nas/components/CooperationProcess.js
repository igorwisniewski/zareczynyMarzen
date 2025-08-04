// components/CooperationProcess.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { num: 1, title: "Bezpłatna konsultacja", description: "Zaczynamy od rozmowy, by poznać Wasze marzenia." },
    { num: 2, title: "Kreacja Scenariusza", description: "Opracowujemy unikalny koncept i przedstawiamy ofertę." },
    { num: 3, title: "Perfekcyjna Realizacja", description: "Dopracowujemy każdy detal, by dzień był idealny." },
];

export default function CooperationProcess() {
    const container = useRef(null);
    useGSAP(() => {
        gsap.from(".section-header > *", {
            scrollTrigger: { trigger: ".section-header", start: "top 85%", toggleActions: "play none none none" },
            opacity: 0, y: 40, stagger: 0.2, duration: 0.8
        });
        gsap.from(".connecting-line", {
            scrollTrigger: { trigger: ".steps-grid", start: "top center", end: "bottom center", scrub: 1 },
            scaleX: 0, transformOrigin: "left center", ease: "none"
        });
        const cards = gsap.utils.toArray('.step-card');
        cards.forEach(card => {
            gsap.from(card, {
                scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
                opacity: 0, y: 60, duration: 0.8, ease: 'power3.out'
            });
        });
    }, { scope: container });

    return(
        <section ref={container} className="py-20 sm:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="section-header text-center mb-20">
                    <h2 className="font-serif text-4xl font-bold text-gray-900">Proces Współpracy</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 mt-4">Od pierwszej rozmowy po wielki finał - jesteśmy z Wami na każdym kroku, dbając o płynny i bezstresowy przebieg przygotowań.</p>
                </div>
                <div className="relative">
                    {/* ZMIANA: Tło linii złote, animowana linia różowa */}
                    <div className="absolute top-8 left-0 w-full h-0.5 bg-brand-200 hidden md:block">
                        <div className="connecting-line h-full bg-rose-500"></div>
                    </div>
                    <div className="steps-grid grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 relative">
                        {steps.map(step => (
                            <div key={step.num} className="step-card text-center flex flex-col items-center">
                                {/* ZMIANA: Kółka z numerami w kolorze różowym */}
                                <div className="w-16 h-16 mb-5 rounded-full border-2 bg-white border-rose-500 text-rose-600 hover:bg-brand-500 hover:text-white transition-colors duration-300 flex items-center justify-center font-serif text-2xl font-bold z-10">
                                    {step.num}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}