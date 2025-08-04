// components/Packages.js
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Rejestracja wtyczki
gsap.registerPlugin(ScrollTrigger);

const PackageCard = ({ imgSrc, title, description, features }) => (
    // Dodajemy klasę do targetowania przez GSAP
    <div className="package-card bg-white border-2 border-rose-200 rounded-sm " >
        <div className="relative w-full h-56">
            <Image src={imgSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t-sm border-b-brand-200 border-b-2" />
        </div>
        <div className="p-6">
            <h3 className="font-serif text-xl font-semibold mb-4 text-black">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <ul className="space-y-2 text-gray-600 mb-6 list-disc list-inside">
                {features.map((feature, i) => <li key={i}>{feature}</li>)}
            </ul>
            <Link href="#" className="font-semibold text-brand-600 hover:text-brand-800 transition-colors text-center">
                Dowiedz się więcej &rarr;
            </Link>
        </div>
    </div>
);

export default function Packages() {
    const container = useRef(null);

    useGSAP(() => {
        // Tworzymy oś czasu, która uruchomi się po przewinięciu do sekcji
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%", // zacznij, gdy 80% sekcji jest widoczne
                toggleActions: "play none none none", // uruchom raz
            }
        });

        // Animujemy pojawienie się nagłówków
        tl.from(".section-subtitle", { opacity: 0, y: 30, duration: 0.6, ease: "power2.out" })
            .from(".section-title", { opacity: 0, y: 30, duration: 0.8, ease: "power2.out" }, "-=0.4")
            // Animujemy karty jedna po drugiej
            .from(".package-card", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2, // klucz do pojawiania się jedna po drugiej
                ease: "power3.out"
            }, "-=0.5");

    }, { scope: container });

    return (
        <section ref={container} className="py-16 sm:py-24 bg-gray-50 min-h-screen" id="uslugi">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" >
                {/* Dodajemy klasy do animacji */}
                <p className="section-subtitle text-rose-700 font-semibold tracking-wider">EKSKLUZYWNE PAKIETY ŚLUBNE</p>
                <h2 className="section-title font-serif text-4xl font-bold mt-2 mb-12 text-gray-950">Dopasowane do Waszych Potrzeb</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    {packages.map(p => <PackageCard key={p.title} {...p} />)}
                </div>
            </div>
        </section>
    );
}

const packages = [
    { title: 'Konsultacje Ślubne', imgSrc: '/images/konsultacje-slubne.jpg', description:'Profesjonalne doradztwo w zakresie planowania, koncepcji i realizacji Waszego wymarzonego wesela.', features: ['Analiza potrzeb i oczekiwań', 'Propozycje stylizacji i motywów','Wsparcie w wyborze lokalizacji'] },
    { title: 'Koordynacja Dnia Ślubu', imgSrc: '/images/pomoc-wdzien-slubu.jpg', description:'Kompleksowa opieka nad przebiegiem uroczystości, abyście mogli cieszyć się z tego wyjątkowego dnia.', features: ['Nadzór nad harmonogramem', 'Koordynacja dostawców', 'Rozwiązywanie nieprzewidzianych sytuacji'] },
    { title: 'Kompleksowa Organizacja', imgSrc: '/images/organizacja-slubu.jpg', description:'Pełne wsparcie od koncepcji po realizację, z dbałością o każdy detal Waszego wymarzonego wesela.', features: ['Opracowanie koncepcji i budżetu', 'Wybór i negocjacje z dostawcami', 'Kompleksowa koordynacja i realizacja'] },
];