// components/Philosophy.js
"use client";

import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const container = useRef(null);
    useGSAP(() => {
        const trigger = { trigger: container.current, start: "top 80%", toggleActions: "play none none none" };
        gsap.from(".text-col", { scrollTrigger: trigger, x: -100, opacity: 0, duration: 1, ease: 'power3.out' });
        gsap.from(".image-col", { scrollTrigger: trigger, x: 100, opacity: 0, duration: 1, ease: 'power3.out' });
    }, { scope: container });

    return(
        <section ref={container} className="py-20 sm:py-28 bg-brand-50 overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-col lg:pr-12">
                        <h2 className="font-serif text-4xl font-bold text-gray-900">Nasza Filozofia</h2>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">W Kreacji Niezapomnianych Zaręczyn i Ślubów wierzymy, że każda para zasługuje na wydarzenie tak unikalne, jak ich miłość. Naszą misją jest zdejmowanie z Waszych barków stresu związanego z organizacją, abyście mogli w pełni cieszyć się każdym momentem – od pierwszych konsultacji po ostatni taniec.</p>
                    </div>
                    <div className="image-col w-full aspect-square relative rounded-lg shadow-xl">
                        <Image src="/images/onas-fst.jpg" alt="Elegancko udekorowany stolik" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    );
}