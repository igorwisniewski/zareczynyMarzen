// components/FeaturedDream.js
"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedDream() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%", // Start animacji trochę później
                toggleActions: "play none none none"
            }
        });

        // Animacja wjeżdżania kolumn z przeciwnych stron
        tl.from(".image-column", { xPercent: -100, opacity: 0, duration: 1, ease: 'power3.out' })
            .from(".text-column", { xPercent: 100, opacity: 0, duration: 1, ease: 'power3.out' }, "-=0.8");

        // Staggerowana animacja dla tekstu w prawej kolumnie
        gsap.from(".text-element", {
            scrollTrigger: {
                trigger: ".text-column",
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power2.out'
        });
    }, { scope: container });

    return (
        <section ref={container} className="bg-white py-20 sm:py-28 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

                    {/* Lewa kolumna - Obraz */}
                    <div className="image-column w-full min-h-[500px] lg:min-h-[600px] relative">
                        <Image
                            src="/images/lunar.jpg" // Użyj jednego, najlepszego zdjęcia
                            alt="Zorza polarna w Laponii"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    {/* Prawa kolumna - Tekst */}
                    <div className="text-column bg-rose-50 p-12 lg:p-16 flex flex-col justify-center">
                        <p className="text-element font-semibold tracking-wider uppercase text-rose-600 mb-3">Realizacja Marzenia</p>
                        <h2 className="text-element font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Zorza Polarna z Pierwszej Loży
                        </h2>
                        <p className="text-element text-gray-600 leading-relaxed mb-8">
                            Dla pary, która pragnęła magii, stworzyliśmy niezapomnianą noc w sercu Laponii. Prywatny transfer, luksusowe szklane igloo i spektakl zorzy polarnej na wyłączność – to doświadczenie, które definiuje naszą filozofię spełniania marzeń.
                        </p>
                        <ul className="text-element space-y-4 mb-10">
                            <li className="flex items-center gap-3">
                                <CheckCircleIcon className="w-6 h-6 text-brand-500"/>
                                <span className="text-gray-600">Prywatny transfer z lotniska</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircleIcon className="w-6 h-6 text-brand-500"/>
                                <span className="text-gray-600">Nocleg w luksusowym szklanym igloo</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <CheckCircleIcon className="w-6 h-6 text-brand-500"/>
                                <span className="text-gray-600">Kolacja przygotowana przez prywatnego szefa kuchni</span>
                            </li>
                        </ul>
                        <div className="text-element">
                            <Link href="/kontakt" className="bg-brand-500 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300 hover:bg-brand-600 inline-block">
                                Zaplanuj Swoje Marzenie
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}