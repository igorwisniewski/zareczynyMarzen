// components/HeroSlub.js
"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroSlub() {
    const scope = useRef(null);

    useGSAP(() => {
        gsap.set([".hero-p", ".hero-h1", ".hero-hr", ".hero-btn"], { opacity: 0, y: 30 });
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
        tl.to(".hero-p", { opacity: 1, y: 0, delay: 0.2 })
            .to(".hero-h1", { opacity: 1, y: 0 }, "-=0.8")
            .to(".hero-hr", { opacity: 1, y: 0, duration: 0.8 }, "-=0.7")
            .to(".hero-btn", { opacity: 1, y: 0, stagger: 0.2 }, "-=0.5");
    }, { scope: scope });

    return (
        <section ref={scope} className="relative min-h-[95vh] w-full flex items-center justify-center text-white text-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/sluby-header.jpg')" }}></div>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 p-4">
                <p className="hero-p text-sm md:text-base tracking-wider mb-2">Tworzymy Nie Tylko Wspomnienia</p>
                <h1 className="hero-h1 text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                    Twoje wesele marzeń <br/> nasza perfekcyjna realizacja
                </h1>
                <hr className="hero-hr max-w-[10%] m-auto mb-5 text-brand-500 h-[3px] bg-brand-500 rounded-full"/>
                <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 items-center max-w-lg mx-auto">
                    <Link href="/slub-marzen#uslugi" className="hero-btn bg-brand-500 hover:bg-white hover:text-brand-900 text-white w-full px-8 py-3 rounded-md font-semibold transition-colors duration-300">
                        Poznaj naszą ofertę
                    </Link>
                    {/* ZMIANA: Drugi przycisk w kolorze rose */}
                    <Link href="/kontakt" className="hero-btn border-2 border-rose-300 text-white w-full px-8 py-3 rounded-md font-semibold hover:bg-rose-300 hover:text-black transition-colors duration-300">
                        Skontaktuj się z nami
                    </Link>
                </div>
            </div>
        </section>
    );
}