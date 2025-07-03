"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from "next/link";

const engagementImageUrl = '/images/ErangmentChoice.png';
const weddingImageUrl = '/images/Weddingchoice.jpg';

export default function WeddingChoice() {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Wszystkie animacje i logika GSAP umieszczona bezpośrednio w funkcji przekazanej do useGSAP.
        // Kontekst GSAP jest tworzony automatycznie przez useGSAP, gdy podasz 'scope'.
        // Nie potrzebujemy już jawnie deklarować zmiennej 'ctx = gsap.context(...)'
        // To eliminuje błąd ESLint 'ctx' is assigned a value but never used.

        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const leftPanel = containerRef.current.querySelector(".panel-left");
            const rightPanel = containerRef.current.querySelector(".panel-right");
            const centerCircle = containerRef.current.querySelector(".center-circle");
            const mainHeadings = containerRef.current.querySelectorAll(".main-heading");

            // Ustawienie początkowego stanu dla desktopu (ważne dla rehydracji)
            gsap.set(mainHeadings, { y: 20, opacity: 0 });
            gsap.set(".bg-image", { scale: 1.05 });
            gsap.set(centerCircle, { opacity: 1, scale: 1 });
            gsap.set([leftPanel, rightPanel], { width: "50%" });

            const handleMouseEnter = (panel) => {
                const target = panel === 'left' ? leftPanel : rightPanel;
                const other = panel === 'left' ? rightPanel : leftPanel;

                gsap.to(target, { width: "75%", duration: 0.8, ease: "power2.inOut" });
                gsap.to(other, { width: "25%", duration: 0.8, ease: "power2.inOut" });
                gsap.to(centerCircle, { opacity: 0, scale: 0.9, duration: 0.6, ease: "power2.inOut" });
                gsap.to(target.querySelector(".main-heading"), { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: "power2.out" });
                gsap.to(target.querySelector(".bg-image"), { scale: 1, duration: 1.2, ease: "power2.inOut" });
                gsap.to(other.querySelector(".main-heading"), { y: 20, opacity: 0, duration: 0.3, ease: "power2.out" });
            };

            const handleMouseLeave = () => {
                gsap.to([leftPanel, rightPanel], { width: "50%", duration: 0.8, ease: "power2.inOut" });
                gsap.to(centerCircle, { opacity: 1, scale: 1, duration: 0.6, delay: 0.2, ease: "power2.inOut" });
                gsap.to(mainHeadings, { y: 20, opacity: 0, duration: 0.6, ease: "power2.out" });
                gsap.to(".bg-image", { scale: 1.05, duration: 1.2, ease: "power2.inOut" });
            };

            // Dodaj event listenery
            leftPanel.addEventListener('mouseenter', () => handleMouseEnter('left'));
            rightPanel.addEventListener('mouseenter', () => handleMouseEnter('right'));
            if (containerRef.current) {
                containerRef.current.addEventListener('mouseleave', handleMouseLeave);
            }


            // Funkcja czyszcząca dla matchMedia
            return () => {
                leftPanel.removeEventListener('mouseenter', () => handleMouseEnter('left'));
                rightPanel.removeEventListener('mouseenter', () => handleMouseEnter('right'));
                if (containerRef.current) {
                    containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
                }
                // Upewnij się, że style dla mobile są poprawne po powrocie.
                // clearProps: "all" dla wszystkich elementów animowanych w tym kontekście
                // jest obsługiwane przez useGSAP, gdy podasz mu 'scope'.
                // Dlatego ręczne clearProps: "all" dla całej listy nie jest już potrzebne.
                gsap.set(mainHeadings, { opacity: 1, y: 0 });
            };
        });

        // Globalna funkcja czyszcząca dla useGSAP, która jest wywoływana, gdy komponent się odmontowuje.
        // Jeśli nie ma innych animacji poza matchMedia, ta część nie jest ściśle konieczna,
        // ale jest dobra praktyka dla ogólnego zarządzania.
        return () => {
            // Jeśli masz jakieś animacje globalne poza matchMedia
            // to też tu je czyść
        };

    }, { scope: containerRef }); // Użyj containerRef jako scope

    return (
        <main
            ref={containerRef}
            className="relative flex flex-col md:flex-row w-screen min-h-screen md:h-screen max-h-[90vh] lg:max-h-screen bg-black font-serif overflow-hidden"
        >

            {/* --- Komponenty w kolejności dla widoku mobilnego --- */}

            {/* 1. Panel górny (Ślub) */}
            <Link href="/slub-marzen" className="panel-left relative w-full h-[50vh] md:w-1/2 md:h-full flex items-center justify-center cursor-pointer overflow-hidden">
                <Image src={weddingImageUrl} alt="Para młoda" fill className="bg-image object-cover z-0" priority />
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="relative z-20 text-center text-white p-8">
                    {/* Nagłówek widoczny na mobile, na desktopie kontrolowany przez GSAP */}
                    <h2 className="main-heading text-4xl md:text-5xl font-bold uppercase tracking-widest opacity-100 md:opacity-0">Ślub Marzeń</h2>
                </div>
            </Link>

            {/* 2. Baner środkowy (tylko na mobile) */}
            <div className="w-full text-center text-white bg-black py-4 border-y-2 border-amber-300 block md:hidden">
                <h3 className="text-xl">Które Marzenie spełnimy?</h3>
            </div>

            {/* 3. Panel dolny (Zaręczyny) */}
            <Link href="/zareczyny-marzen" className="panel-right relative w-full h-[50vh] md:w-1/2 md:h-full flex items-center justify-center cursor-pointer overflow-hidden">
                <Image src={engagementImageUrl} alt="Zaręczyny" fill className="bg-image object-cover z-0" priority />
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="relative z-20 text-center text-white p-8">
                    {/* Nagłówek widoczny na mobile, na desktopie kontrolowany przez GSAP */}
                    <h2 className="main-heading text-4xl md:text-5xl font-bold uppercase tracking-widest opacity-100 md:opacity-0">Zaręczyny Marzeń</h2>
                </div>
            </Link>

            {/* 4. Centralne koło (tylko na desktopie) */}
            <div className="center-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:flex items-center justify-center">
                <div className="flex items-center justify-center w-72 h-72 rounded-full border-2 border-amber-300 text-white bg-black/70">
                    <span className="text-3xl text-center">Które Marzenie Spełnimy?</span>
                </div>
            </div>

        </main>
    );
}