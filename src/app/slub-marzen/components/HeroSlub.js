// components/HeroSlub.js
"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSlub() {
    const scope = useRef(null); // Tworzymy referencję do kontenera animacji

    useGSAP(() => {
        // Ustawiamy początkowy stan (niewidoczne elementy)
        // Można to też zrobić w .from(), ale tak jest czytelniej
        gsap.set([".hero-p", ".hero-h1", ".hero-hr", ".hero-btn"], { opacity: 0, y: 30 });

        // Tworzymy oś czasu dla sekwencji animacji
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

        tl.to(".hero-p", { opacity: 1, y: 0, delay: 0.2 })
            .to(".hero-h1", { opacity: 1, y: 0 }, "-=0.8") // Startuje 0.8s przed końcem poprzedniej animacji
            .to(".hero-hr", { opacity: 1, y: 0, duration: 0.8 }, "-=0.7")
            .to(".hero-btn", { opacity: 1, y: 0, stagger: 0.2 }, "-=0.5"); // stagger animuje przyciski jeden po drugim

    }, { scope: scope }); // Ograniczamy działanie GSAP do naszego kontenera

    return (
        // Dodajemy ref do głównej sekcji
        <section ref={scope} className="relative min-h-[95vh] w-full flex items-center justify-center text-white text-center overflow-hidden">
            {/* Tło - zastąp ścieżką do Twojego obrazka */}
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/sluby-header.jpg')" }}></div>
            {/* Nakładka przyciemniająca */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 p-4">
                {/* Dodajemy klasy do animacji */}
                <p className="hero-p text-sm md:text-base tracking-wider mb-2">Tworzymy Nie Tylko Wspomnienia </p>
                <h1 className="hero-h1 text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                    Twoje wesele marzeń <br/> nasza perfekcyjna realizacja
                </h1>
                <hr className="hero-hr max-w-[10%] m-auto mb-5 text-brand-500 h-[3px] bg-brand-500 rounded-full"/>

                <div className="flex flex-row flex-wrap gap-4 justify-center items-center">

                    <Link
                        href="/slub-marzen#uslugi"
                        className="hero-btn bg-brand-500 hover:bg-white hover:text-brand-500 px-8 py-3 rounded-md font-semibold transition-colors duration-300 text-center"
                    >
                        Poznaj naszą ofertę
                    </Link>

                    <div className="bg-brand p-1 rounded-lg shadow">
                        <Link
                            href="/kontakt"
                            className="hero-btn block border-white border-2 text-white text-center px-8 py-2.5 rounded-md font-semibold hover:bg-gray-100 hover:text-black transition-colors duration-300"
                        >
                            Skontaktuj się z nami
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}