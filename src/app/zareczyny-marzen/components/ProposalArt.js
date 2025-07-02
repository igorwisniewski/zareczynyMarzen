// components/ProposalArt.js
"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ShieldCheckIcon, HeartIcon, KeyIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: <ShieldCheckIcon className="w-7 h-7"/>,
        title: "Dyskrecja i Elegancja",
        description: "Każdy detal planujemy z najwyższą starannością, zachowując pełną poufność i profesjonalizm."
    },
    {
        icon: <HeartIcon className="w-7 h-7"/>,
        title: "Personalizacja premium",
        description: "Nie ma dwóch identycznych propozycji. Każda jest szyta na miarę Waszej unikalnej historii."
    },
    {
        icon: <KeyIcon className="w-7 h-7"/>,
        title: "Dostęp do Ekskluzywności",
        description: "Oferujemy lokalizacje i doświadczenia niedostępne dla innych, tworząc prawdziwie wyjątkowe momenty."
    }
];

export default function ProposalArt() {
    const container = useRef(null);

    useGSAP(() => {
        // --- 1. Animacja dla nagłówka ---
        gsap.from(".section-header > *", {
            scrollTrigger: {
                trigger: ".section-header",
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.2
        });

        // --- 2. Zaawansowana animacja dla każdej karty z osobna ---
        const items = gsap.utils.toArray('.feature-item');
        items.forEach(item => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });
            // Animujemy po kolei ikonę, tytuł i opis wewnątrz każdej karty
            tl.from(item.querySelector('.icon-wrapper'), { scale: 0, opacity: 0, ease: 'back.out(1.7)', duration: 0.6 })
                .from(item.querySelector('.item-title'), { x: -30, opacity: 0, ease: 'power2.out', duration: 0.5 }, "-=0.4")
                .from(item.querySelector('.item-desc'), { x: -20, opacity: 0, ease: 'power2.out', duration: 0.5 }, "-=0.3");
        });

        // --- 3. Efekt paralaksy dla zdjęcia po prawej ---
        gsap.to(".section-image", {
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom", // Zacznij, gdy dół sekcji dotknie dołu ekranu
                end: "bottom top", // Zakończ, gdy góra sekcji dotknie góry ekranu
                scrub: 1 // Płynne "przyklejenie" animacji do paska przewijania
            },
            y: -80, // Przesuwaj obrazek w górę o 80px w trakcie scrollowania
            ease: "none"
        });

    }, { scope: container });

    return (
        <section ref={container} className="py-20 sm:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="section-header text-center max-w-3xl mx-auto mb-20">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">Sztuka niezapomnianej propozycji</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Nasza filozofia opiera się na przekonaniu, że każda miłość zasługuje na wyjątkową oprawę. Tworzymy nie tylko zaręczyny, ale wspomnienia na całe życie.
                    </p>
                    <div className="w-24 h-1 bg-brand-400 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <ul className="feature-list space-y-10">
                        {features.map((feature, index) => (
                            <li key={index} className="feature-item flex items-start gap-6">
                                <div className="icon-wrapper flex-shrink-0 w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center shadow-sm">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="item-title text-xl font-semibold mb-2 text-black">{feature.title}</h3>
                                    <p className="item-desc text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="section-image w-full aspect-[5/5] relative rounded-lg overflow-hidden shadow-2xl">
                        <Image src="/images/zareczyny-fst.jpg" alt="Elegancko udekorowany stolik zaręczynowy" layout="fill" objectFit="cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}