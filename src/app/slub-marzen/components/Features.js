// components/Features.js
"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SparklesIcon, ClipboardDocumentCheckIcon, CameraIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card bg-white p-8 text-center rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out border-t-4 border-brand-400">
        <div className="mx-auto w-16 h-16 mb-5 rounded-full bg-brand-50 flex items-center justify-center text-brand-500">
            {icon}
        </div>
        <h3 className="font-serif text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

export default function Features() {
    const container = useRef(null);

    useGSAP(() => {
        // 👇 ZMIANA: Pobieramy wszystkie karty do tablicy
        const cards = gsap.utils.toArray('.feature-card');

        // 👇 ZMIANA: Tworzymy pętlę i dla każdej karty tworzymy osobną animację
        cards.forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card, // Triggerem jest teraz sama karta
                    start: "top 85%", // Animacja startuje, gdy 85% karty jest widoczne
                    toggleActions: "play none none none",
                },
                opacity: 0,
                y: 60,
                duration: 0.5,
                ease: "power3.out",
            });
        });

    }, { scope: container });

    return (
        <section ref={container} className="py-20 sm:py-28 bg-gray-50 min-h-[110vh] flex items-center justify-center ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-brand-800 font-semibold tracking-wider uppercase">NASZA SPECJALNOŚĆ</h2>
                    <p className="font-serif text-4xl md:text-5xl font-bold mt-2 text-gray-900">Perfekcja w każdym
                        detalu</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<SparklesIcon className="w-8 h-8"/>}
                        title="Dbałość o Detale"
                        description="Wierzymy, że magia tkwi w szczegółach. Każdy element jest starannie dopracowany, by stworzyć spójną i zachwycającą całość."
                    />
                    <FeatureCard
                        icon={<ClipboardDocumentCheckIcon className="w-8 h-8"/>}
                        title="Bezstresowa Organizacja"
                        description="Zdejmujemy z Waszych barków ciężar planowania. Nasz proces jest transparentny i uporządkowany, byście mogli cieszyć się każdą chwilą."
                    />
                    <FeatureCard
                        icon={<CameraIcon className="w-8 h-8"/>}
                        title="Niezapomniane Wspomnienia"
                        description="Naszym celem jest tworzenie nie tylko wydarzeń, ale wspomnień, które zostaną z Wami na całe życie, uwiecznione w idealnej oprawie."
                    />
                </div>
            </div>
        </section>
    );
}