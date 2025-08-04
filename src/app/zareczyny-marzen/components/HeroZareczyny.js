// components/HeroZareczyny.js
"use client";

import Link from 'next/link';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroZareczyny() {
    const scope = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
        tl.from(".hero-el", { y: 40, opacity: 0, stagger: 0.2, delay: 0.2 });
    }, { scope: scope });

    return (
        <section ref={scope} className="relative min-h-[100vh] w-full flex items-center justify-center text-white text-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/zareczyny-header.jpg')" }}></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 p-4">
                <h1 className="hero-el text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                    Początek Waszej Wiecznej Historii
                </h1>
                <p className="hero-el text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    Stworzymy dla Was moment, który przekroczy najśmielsze oczekiwania i stanie się najpiękniejszym wspomnieniem.
                </p>
                <div className="hero-el flex flex-wrap gap-4 justify-center">
                    <Link
                        href="/zareczyny-marzen#realizacje"
                        className="hero-btn bg-brand-500 hover:bg-white hover:text-brand-500 px-8 py-3 rounded-md font-semibold transition-colors duration-300 text-center"
                    >
                        Zobacz nasze Realizacje
                    </Link>

                    <div className="bg-brand p-1 rounded-lg shadow">
                        <Link
                            href="/kontakt"
                            className="hero-btn block border-rose-400 border-2 text-white text-center px-8 py-2.5 rounded-md font-semibold hover:bg-rose-300 hover:text-black transition-colors duration-300"
                        >
                            Skontaktuj się z nami
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}