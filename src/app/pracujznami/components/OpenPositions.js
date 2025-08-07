"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

// Lista stanowisk - jeśli jest pusta, pokaże się inna wiadomość
const positions = [
    {
        title: "Event Manager",
        location: "Warszawa / Zdalnie",
        type: "Pełny etat",
        href: "/kariera/event-manager"
    },
    {
        title: "Asystent/ka ds. Organizacji Wesel",
        location: "Warszawa",
        type: "Staż / Część etatu",
        href: "/kariera/asystent"
    },
];
// Aby pokazać drugą wiadomość, po prostu zmień na: const positions = [];

export default function OpenPositions() {
    const container = useRef(null);
    useGSAP(() => {
        gsap.from(".position-item", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power2.out'
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-20 sm:py-28 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">Dołącz do Naszego Zespołu</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 mt-4">Szukamy osób, dla których nie ma rzeczy niemożliwych.</p>
                </div>

                <div className="space-y-6">
                    {positions.length > 0 ? (
                        positions.map((job) => (
                            <div key={job.title} className="position-item bg-white border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between hover:shadow-lg transition-shadow duration-300">
                                <div>
                                    <h3 className="text-xl font-semibold text-brand-900">{job.title}</h3>
                                    <p className="text-gray-500 mt-1">{job.location} &middot; {job.type}</p>
                                </div>
                                <div className="mt-4 sm:mt-0">
                                    <Link href={job.href} className="bg-rose-500 text-white px-6 py-2 rounded-md font-semibold transition-colors duration-300 hover:bg-rose-600">
                                        Aplikuj
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center bg-rose-50 border border-rose-200 rounded-lg p-12">
                            <h3 className="text-2xl font-semibold text-rose-900">Aktualnie nie prowadzimy rekrutacji</h3>
                            <p className="mt-4 text-rose-700 max-w-xl mx-auto">
                                Jednak zawsze jesteśmy otwarci na poznanie utalentowanych osób. Jeśli czujesz, że pasujesz do naszego zespołu, wyślij swoje CV oraz kilka słów o sobie na adres:
                            </p>
                            <a href="mailto:kariera@twojemail.pl" className="mt-6 inline-block font-bold text-brand-600 text-lg hover:underline">
                                kariera@twojemail.pl
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}