// components/ConciergeProcess.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { num: 1, title: "Opowiedz Nam o Marzeniu", description: "Wszystko zaczyna się od rozmowy – im śmielsza wizja, tym większe wyzwanie, które uwielbiamy." },
    { num: 2, title: "Tworzymy Scenariusz", description: "Nasz zespół kreuje szczegółowy plan działania, dbając o logistykę, bezpieczeństwo i efekt 'wow'." },
    { num: 3, title: "Przeżyj Niezapomniane Chwile", description: "Dyskretnie czuwamy nad realizacją, a Ty cieszysz się perfekcyjnie zaaranżowanym marzeniem." },
];

export default function ConciergeProcess() {
    const container = useRef(null);
    useGSAP(() => {
        gsap.from(".section-header", { scrollTrigger: { trigger: ".section-header", start: "top 85%" }, opacity: 0, y: 40 });
        gsap.from(".connecting-line", { scrollTrigger: { trigger: ".steps-grid", start: "top center", end: "bottom center", scrub: 1 }, scaleX: 0, transformOrigin: "left center" });

        // 👇 ZMIANA: Dodajemy <Element>, aby poprawnie otylować zwracaną tablicę
        gsap.utils.toArray<Element>('.step-card').forEach(card => {
            gsap.from(card, { scrollTrigger: { trigger: card, start: "top 85%" }, opacity: 0, y: 60, ease: 'power3.out' });
        });
    }, { scope: container });

    return(
        <section ref={container} className="py-20 sm:py-28 bg-rose-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="section-header text-center mb-20">
                    <h2 className="font-serif text-4xl font-bold text-gray-900">Od Pomysłu do Realizacji</h2>
                </div>
                <div className="relative">
                    <div className="absolute top-8 left-0 w-full h-0.5 bg-brand-200 hidden md:block">
                        <div className="connecting-line h-full bg-brand-500"></div>
                    </div>
                    <div className="steps-grid grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 relative">
                        {steps.map(step => (
                            <div key={step.num} className="step-card text-center flex flex-col items-center">
                                <div className="w-16 h-16 mb-5 rounded-full border-2 bg-white border-brand-500 text-brand-600 flex items-center justify-center font-serif text-2xl font-bold z-10">{step.num}</div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};