// components/Values.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HeartIcon, HandThumbUpIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const values = [
    { icon: <HeartIcon className="w-7 h-7"/>, title: "Pasja i Zaangażowanie", description: "Każdy projekt traktujemy z sercem, jakby był naszym własnym." },
    { icon: <HandThumbUpIcon className="w-7 h-7"/>, title: "Jakość i Zaufanie", description: "Współpracujemy tylko ze sprawdzonymi partnerami, gwarantując najwyższy standard." },
    { icon: <ChatBubbleLeftRightIcon className="w-7 h-7"/>, title: "Otwarta Komunikacja", description: "Jesteśmy Waszym partnerem na każdym etapie, zawsze gotowi do rozmowy i wsparcia." },
];

export default function Values() {
    const container = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: container.current, start: "top 80%", toggleActions: "play none none none" }});
        tl.from(".section-header > *", { opacity: 0, y: 40, stagger: 0.2, duration: 0.8 })
            .from(".value-card", { opacity: 0, y: 50, stagger: 0.2, duration: 0.6 }, "-=0.5");
    }, { scope: container });

    return(
        <section ref={container} className="py-20 sm:py-28 bg-brand-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="section-header text-center mb-16">
                    <h2 className="font-serif text-4xl font-bold">Nasze Wartości</h2>
                    <p className="max-w-2xl mx-auto text-brand-100 mt-4">Fundamenty naszej doskonałości opierają się na trzech kluczowych filarach.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map(item => (
                        <div key={item.title} className="value-card bg-white/10 p-8 rounded-lg text-center backdrop-blur-sm border border-white/10">
                            <div className="mx-auto w-14 h-14 mb-5 rounded-full bg-white/20 text-white flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-brand-200">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}