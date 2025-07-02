// components/Differentiators.js
"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const points = [
    { num: 1, text: "Ekskluzywny dostęp do najlepszych lokalizacji i usług." },
    { num: 2, text: "Kreatywność bez granic w tworzeniu unikalnych koncepcji." },
    { num: 3, text: "Pełne partnerstwo i wsparcie na każdym etapie planowania." },
];

export default function Differentiators() {
    const container = useRef(null);
    useGSAP(() => {
        const trigger = { trigger: container.current, start: "top 80%", toggleActions: "play none none none" };

        gsap.from(".image-col", { scrollTrigger: trigger, xPercent: -100, opacity: 0, duration: 1, ease: 'power3.out' });
        gsap.from(".text-col", { scrollTrigger: trigger, xPercent: 100, opacity: 0, duration: 1, ease: 'power3.out' });

    }, { scope: container });

    return(
        <section ref={container} className="py-20 sm:py-28 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="image-col w-full aspect-[4/5] relative rounded-lg shadow-xl">
                        <Image src="/images/about-scd.jpg" alt="Para młoda w kościele" layout="fill" objectFit="cover" className="rounded-lg"/>
                    </div>
                    <div className="text-col lg:pl-12">
                        <h2 className="font-serif text-4xl font-bold text-gray-900">Nasze Wyróżniki</h2>
                        <p className="mt-4 text-lg text-gray-600">Sumą tych elementów jest Wasze idealne dzieło.</p>
                        <ul className="mt-8 space-y-6">
                            {points.map(point => (
                                <li key={point.num} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center font-bold font-serif text-lg">
                                        {point.num}
                                    </div>
                                    <p className="text-gray-700 text-lg pt-1.5">{point.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}