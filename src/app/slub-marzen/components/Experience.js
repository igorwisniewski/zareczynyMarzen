// components/Experience.js
"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Rejestrujemy wtyczkę ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const container = useRef(null);

    useGSAP(() => {
        // Animacja dla całego bloku tekstowego (płynne pojawienie się)
        gsap.from(".text-content", {
            scrollTrigger: {
                trigger: ".text-content",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        });

        // Animacja dla licznika
        const counters = gsap.utils.toArray(".counter-number");
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.to, 10);

            // ZMIANA: Usunięto cudzysłowy wokół nazwy zmiennej
            let proxy = { value: 0 };

            // ZMIANA: Używamy zmiennej, a nie tekstu
            gsap.to(proxy, {
                scrollTrigger: {
                    trigger: counter,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                value: target,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                    // Aktualizujemy tekst w elemencie przy każdej klatce animacji
                    counter.innerText = Math.round(proxy.value);
                },
            });
        });

    }, { scope: container });

    return (
        <section ref={container} className="bg-brand-100 py-20 sm:py-28 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Obrazek po lewej z ozdobną ramką */}
                    <div className="p-4 bg-white shadow-xl">
                        <div className="relative w-full aspect-[4/5]">
                            <Image
                                src="/images/sluby-fst.jpg" // Podmień na właściwą ścieżkę
                                alt="Wedding planner w trakcie pracy"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>

                    {/* Tekst po prawej */}
                    <div className="text-content text-brand-900">
                        <p className="font-semibold tracking-wider uppercase text-brand-600 mb-3">O nas</p>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                            Bezstresowa Organizacja <br /> Unikalne Doświadczenia
                        </h2>
                        <p className="text-brand-800/90 leading-relaxed mb-10">
                            Śluby Marzeń to zespół doświadczonych specjalistów, którzy z pasją tworzą wyrafinowane uroczystości ślubne. Nasze podejście opiera się na głębokim zrozumieniu Waszych potrzeb i marzeń, przekształcając je w niezapomniane wydarzenia. Specjalizujemy się w organizacji ekskluzywnych wesel, gdzie każdy detal jest dopracowany do perfekcji. Nasza filozofia opiera się na harmonijnym połączeniu elegancji, luksusu i osobistego charakteru uroczystości.
                        </p>

                        {/* Okręgi z latami doświadczenia */}
                        <div className="flex flex-col sm:flex-row gap-8">
                            <div className="text-center flex flex-col items-center">
                                <div className="bg-brand-900 text-white rounded-full w-28 h-28 flex items-center justify-center font-bold text-4xl font-serif">
                                    <span className="counter-number" data-to="10">0</span>+
                                </div>
                                <p className="mt-4 max-w-[150px] text-sm text-brand-800">Lat doświadczenia w branży ślubnej</p>
                            </div>
                            <div className="text-center flex flex-col items-center">
                                <div className="bg-brand-900 text-white rounded-full w-28 h-28 flex items-center justify-center font-bold text-4xl font-serif">
                                    <span className="counter-number" data-to="50">0</span>+
                                </div>
                                <p className="mt-4 max-w-[150px] text-sm text-brand-800">Zorganizowanych, unikalnych wesel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}