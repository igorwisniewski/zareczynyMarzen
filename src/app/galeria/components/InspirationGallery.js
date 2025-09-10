"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Rejestracja wtyczki
gsap.registerPlugin(ScrollTrigger);

// Przykładowa lista zdjęć (umieść swoje zdjęcia w folderze /public/images/gallery)
const allImages = [
    { src: '/images/gallery/galleria-1.jpg', alt: 'Dekoracja stołu weselnego' },
    { src: '/images/gallery/galleria-2.jpg', alt: 'Para młoda podczas sesji' },
    { src: '/images/gallery/galleria-3.jpg', alt: 'Obrączki ślubne na kwiatach' },
    { src: '/images/gallery/galleria-4.jpg', alt: 'Detal sukni ślubnej' },
    { src: '/images/gallery/galleria-5.jpg', alt: 'Eleganckie nakrycie stołu' },
    { src: '/images/gallery/galleria-6.jpg', alt: 'Pan młody poprawiający muszkę' },
    { src: '/images/gallery/galleria-7.jpg', alt: 'Bukiet ślubny panny młodej' },
    { src: '/images/gallery/galleria-8.jpg', alt: 'Para młoda przy ołtarzu' },
    { src: '/images/gallery/galleria-9.jpg', alt: 'Tort weselny z dekoracjami' },
    { src: '/images/zare/zare-1.jpg', alt: 'Dekoracja stołu weselnego' },
    { src: '/images/zare/zare-2.jpg', alt: 'Para młoda podczas sesji' },
    { src: '/images/zare/zare-3.jpg', alt: 'Obrączki ślubne na kwiatach' },
    { src: '/images/zare/zare-4.jpg', alt: 'Detal sukni ślubnej' },
    { src: '/images/zare/zare-5.jpg', alt: 'Eleganckie nakrycie stołu' },
    { src: '/images/zare/zare-6.jpg', alt: 'Pan młody poprawiający muszkę' },
    { src: '/images/zare/zare-7.jpg', alt: 'Bukiet ślubny panny młodej' },
    { src: '/images/zare/zare-8.jpg', alt: 'Para młoda przy ołtarzu' },

];

const IMAGES_PER_PAGE = 6;

export default function InspirationGallery() {
    const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
    const container = useRef(null);
    const gridRef = useRef(null); // Ref do siatki galerii

    useGSAP(() => {
        // Ta animacja będzie uruchamiana za każdym razem, gdy visibleCount się zmieni
        // i tylko dla elementów, które jeszcze nie były animowane (dzięki klasie has-animated)
        const animTimeout = setTimeout(() => {
            const items = gsap.utils.toArray('.gallery-item:not(.has-animated)');

            items.forEach(item => {
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%', // Rozpocznij animację, gdy górna część elementu znajdzie się na 90% wysokości viewportu
                        toggleActions: 'play none none none', // Odtwórz animację raz, gdy trigger jest aktywowany
                    },
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    onComplete: () => {
                        // Dodaj klasę, aby oznaczyć element jako już animowany
                        item.classList.add('has-animated');
                    }
                });
            });
        }, 100); // Małe opóźnienie, aby Next.js miał czas na renderowanie nowych elementów
        return () => clearTimeout(animTimeout); // Cleanup timeout
    }, { dependencies: [visibleCount], scope: container }); // Zależność od visibleCount

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + IMAGES_PER_PAGE);
    };

    const handleShowLess = () => {
        // 1. Pobieramy elementy, które mają zostać ukryte
        // Omijamy pierwsze IMAGES_PER_PAGE, bo one zostają
        const itemsToHide = gsap.utils.toArray('.gallery-item').slice(IMAGES_PER_PAGE);

        // Upewniamy się, że są jakieś elementy do ukrycia
        if (itemsToHide.length === 0) return;

        // 2. Uruchamiamy na nich animację "chowania"
        gsap.to(itemsToHide, {
            opacity: 0,
            scale: 0.9,
            y: 30,
            duration: 0.5,
            stagger: 0.05, // Lekkie opóźnienie dla każdego kolejnego elementu
            ease: "power2.in",
            // 3. Po zakończeniu animacji, aktualizujemy stan w Reakcie
            onComplete: () => {
                setVisibleCount(IMAGES_PER_PAGE);
                // Opcjonalnie: przewijamy do góry galerii, aby pokazać początek
                if (gridRef.current) {
                    // Używamy scrollIntoView z 'center' aby był bardziej responsywny
                    gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                // Usuń klasę has-animated z elementów, które są teraz ukryte,
                // aby mogły się ponownie animować przy ponownym załadowaniu
                itemsToHide.forEach(item => item.classList.remove('has-animated'));
            }
        });
    };

    const imagesToShow = allImages.slice(0, visibleCount);

    return (
        <section ref={container} className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Animacje GSAP dla H2 i P (opcjonalne, ale mogą dodać więcej "życia") */}

                <div ref={gridRef} className="gallery-grid grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {imagesToShow.map((image) => (
                        <div key={image.src} className="gallery-item aspect-square relative overflow-hidden rounded-lg shadow-md opacity-0 scale-95 translate-y-10">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="transform hover:scale-110 transition-transform duration-500 ease-in-out"
                                onError={(e) => console.error(`Błąd ładowania obrazka: ${image.src}`, e)}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {visibleCount > IMAGES_PER_PAGE && (
                        <button
                            onClick={handleShowLess}
                            className="bg-brand-500 text-white hover:bg-white hover:text-brand-500 border-brand-500 border-2 px-8 py-3 rounded-md transition-colors duration-300 font-semibold"
                        >
                            Pokaż mniej
                        </button>
                    )}

                    {visibleCount < allImages.length && (
                        <button
                            onClick={handleLoadMore}
                            className="bg-brand-500 text-white hover:bg-white hover:text-brand-500 border-brand-500 border-2 px-8 py-3 rounded-md transition-colors duration-300 font-semibold"
                        >
                            Zobacz więcej
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}