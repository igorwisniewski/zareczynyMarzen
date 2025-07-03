// components/ContactDetails.js
"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const details = [
    { icon: <PhoneIcon className="w-8 h-8 text-brand-600"/>, title: "Telefon", content: "+48 507 792 161" },
    { icon: <EnvelopeIcon className="w-8 h-8 text-brand-600"/>, title: "Email", content: "kontakt@zareczynymarzen.pl" },
];

export default function ContactDetails() {
    const container = useRef(null);
    useGSAP(() => {
        gsap.from(".detail-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.out'
        });
    }, { scope: container });

    return(
        <section ref={container} className="bg-white pb-20 sm:pb-28 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {details.map(item => (
                        <div key={item.title} className="detail-card border-2 border-brand-300 rounded-lg p-8 text-center flex flex-col items-center justify-center min-h-[200px]">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-500 mb-1">{item.title}</h3>
                            <p className="text-gray-800">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}