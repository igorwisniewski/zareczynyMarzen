"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function AboutHero() {
    const container = useRef(null);
    useGSAP(() => {
        // Animacja kolumny z obrazem
        gsap.from(".image-col", { x: -100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });

        // Animacja kolumny z tekstem
        gsap.from(".text-col", { x: 100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.2 });

        // Animacja nagłówka H1
        gsap.from(".text-col h1", { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.5 });

        // Animacja paragrafu P
        gsap.from(".text-col p", { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.7 });

        // Animacja przycisku Link
        gsap.from(".text-col .contact-button", { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out', delay: 0.9 });

    }, { scope: container });

    return(
        <section ref={container} className="py-20 sm:py-28 bg-white overflow-hidden min-h-[120vh]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center  ">
                    <div className="image-col w-full aspect-[4/5] relative rounded-lg bottom-0">
                        <Image src="/images/onas-header.png" alt="Wedding planner" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                    <div className="text-col lg:pl-12">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">Twój pomysł, nasz plan</h1>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">W Kreacji Niezapomnianych Zaręczyn i Ślubów specjalizujemy się w tworzeniu nie tylko wydarzeń, ale przede wszystkim wspomnień, które zostają na całe życie. Nasza pasja i doświadczenie pozwalają nam przekształcać Wasze marzenia w perfekcyjnie zorganizowaną rzeczywistość.</p>
                        <div className="mt-8">
                            <Link
                                href="/kontakt"
                                className="block border-brand-500 bg-brand-500 border-2 text-white text-center px-8 py-2.5 rounded-md font-semibold hover:bg-gray-100 hover:text-brand-500 transition-colors duration-300 max-w-[50%] contact-button"
                            >
                                Skontaktuj się z nami
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}