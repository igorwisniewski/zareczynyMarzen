// components/ConciergeIntro.js
"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ConciergeIntro() {
    const container = useRef(null);
    useGSAP(() => {
        const trigger = { trigger: container.current, start: "top 80%", toggleActions: "play none none none" };
        gsap.from(".text-col", { scrollTrigger: trigger, x: -100, opacity: 0, duration: 1, ease: 'power3.out' });
        gsap.from(".image-col", { scrollTrigger: trigger, x: 100, opacity: 0, duration: 1, ease: 'power3.out' });
    }, { scope: container });

    return(
        <section ref={container} className="py-20 sm:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="text-col">
                        <p className="font-semibold tracking-wider uppercase text-brand-600 mb-3">CONCIERGE MARZEŃ</p>
                        <h2 className="font-serif text-4xl font-bold text-gray-900">Granice istnieją tylko po to, by je przekraczać</h2>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">Od lotu balonem nad Kapadocją, przez prywatną kolację w galerii sztuki, po zorganizowanie spotkania z idolem – nasz Concierge specjalizuje się w realizacji najbardziej wyszukanych i spersonalizowanych scenariuszy. Słuchamy, planujemy i dyskretnie wykonujemy, przekształcając Twoje najśmielsze wizje w namacalną rzeczywistość.</p>
                    </div>
                    <div className="image-col w-full aspect-square relative rounded-lg shadow-xl">
                        <Image src="/images/meteoritering.jpg" alt="Luksusowe doświadczenie" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
};