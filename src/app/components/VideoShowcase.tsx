// components/VideoShowcase.js
"use client";

import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const DynamicCustomVideoPlayer = dynamic(() => import('./CustomVideoPlayer'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-black flex items-center justify-center">
            <p className="text-white">Ładowanie odtwarzacza...</p>
        </div>
    )
});

export default function VideoShowcase() {
    const container = useRef(null);

    useGSAP(() => {
        // ... (animacje GSAP pozostają bez zmian)
        gsap.from(".main-header > *", { scrollTrigger: { trigger: ".main-header", start: "top 85%" }, opacity: 0, y: 30, stagger: 0.2, duration: 0.8 });
        const contentTrigger = { trigger: ".content-grid", start: "top 80%", toggleActions: "play none none none" };
        gsap.from(".video-column", { scrollTrigger: contentTrigger, x: -50, opacity: 0, duration: 1, ease: 'power3.out' });
        gsap.from(".text-column", { scrollTrigger: contentTrigger, x: 50, opacity: 0, duration: 1, ease: 'power3.out' });
        gsap.from(".footer-text", { scrollTrigger: { trigger: ".footer-text", start: "top 90%" }, opacity: 0, y: 40, duration: 1 });
    }, { scope: container });

    // ZMIANA: Podmień na ID filmu z Pytania na Śniadanie

    return (
        <section ref={container} className="py-20 sm:py-28 bg-white overflow-hidden min-h-[100vh] items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="main-header text-center mb-16">
                    {/* ZMIANA: Nowe teksty dopasowane do historii */}
                    <p className="text-rose-600 font-semibold tracking-wider">PRAWDZIWA HISTORIA</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 text-gray-900">
                        Wasze Marzenia, Nasza Realizacja – Bez Granic
                    </h2>
                </div>

                <div className="content-grid grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="video-column w-full  rounded-lg shadow-2xl overflow-hidden bg-black">
                        <DynamicCustomVideoPlayer
                            videoSrc={`/video/wideo.mp4`} // Dostosuj, jeśli używasz self-hosting
                            posterSrc={`/video/poster.jpg`}
                        />
                    </div>
                    <div className="text-column">
                        {/* ZMIANA: Nowe teksty dopasowane do historii */}
                        <h3 className="font-serif text-3xl font-bold text-gray-800 mb-4">Nieszablonowe Scenariusze</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Co, jeśli Waszym największym marzeniem nie jest tradycyjne wesele, a... koncert ulubionego
                            artysty? Dla nas nie ma złych pomysłów. Ta historia to dowód, że idealna uroczystość to
                            taka, która jest w 100% Wasza – autentyczna, odważna i pełna prawdziwych emocji.
                        </p>
                        <p className="text-gray-600 leading-relaxed ">
                            Naszą rolą jest nie tylko organizacja, ale przede wszystkim wspieranie Waszych, nawet
                            najśmielszych wizji. Niezależnie od tego, czy jest to ucieczka z własnego wesela na koncert,
                            czy cicha ceremonia na szczycie góry, jesteśmy tu, by zadbać o każdy detal. Przekształcamy
                            marzenia w perfekcyjnie zorganizowane i niezapomniane wspomnienia, które idealnie oddają to,
                            kim jesteście.
                        </p>
                    </div>
                </div>


            </div>
        </section>
    );
}