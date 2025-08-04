// components/Testimonials.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

// Rejestracja wtyczki GSAP
gsap.registerPlugin(ScrollTrigger);

// Ulepszony komponent karty
const TestimonialCard = ({ name, imgSrc }) => (
    <div className="testimonial-card bg-white p-6 rounded-lg shadow-md border-t-4 border-rose-300">
        <div className="flex items-center mb-4">
            <div className="relative w-14 h-14 rounded-full mr-4 overflow-hidden border-2 border-brand-200">
                <Image
                    src={imgSrc}
                    alt={`Avatar ${name}`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div>
                <p className="font-semibold text-gray-800">{name}</p>
                <div className="text-yellow-400 text-xl">★★★★★</div>
            </div>
        </div>
        <p className="text-gray-600 italic">&#34;Najlepsza decyzja w naszym życiu! Profesjonalizm i zaangażowanie na najwyższym poziomie. Dziękujemy!&#34;</p>
    </div>
);

// Główny komponent sekcji
export default function Testimonials() {
    const container = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
                toggleActions: "play none none none",
            }
        });

        tl.from(".section-title", { opacity: 0, y: 40, duration: 0.8, ease: "power3.out" })
            .from(".testimonial-card", {
                opacity: 0,
                y: 50,
                duration: 0.6,
                stagger: 0.2, // Animacja jedna po drugiej
                ease: "power2.out"
            }, "-=0.5");

    }, { scope: container });

    return (
        <section ref={container} className="py-16 sm:py-24 bg-brand-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="section-title font-serif text-4xl font-bold text-center mb-16 text-gray-950">Dla nas to nie tylko słowa</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TestimonialCard name="Anna i Piotr" imgSrc="/images/avatar-1.jpg" />
                    <TestimonialCard name="Katarzyna i Marek" imgSrc="/images/avatar-2.jpg" />
                    <TestimonialCard name="Ewa i Tomasz" imgSrc="/images/avatar-3.jpg" />
                </div>
            </div>
        </section>
    );
}