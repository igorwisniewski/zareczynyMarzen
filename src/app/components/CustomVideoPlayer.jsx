// components/CustomVideoPlayer.js
"use client";

import Plyr from "plyr-react";
import "plyr-react/plyr.css"; // Importujemy style odtwarzacza

// Komponent przyjmuje ścieżkę do wideo i miniaturki
export default function CustomVideoPlayer({ videoSrc, posterSrc }) {
    const plyrSource = {
        type: "video",
        sources: [
            {
                src: videoSrc,
                type: "video/mp4",
            },
        ],
        poster: posterSrc,
    };

    // Opcje do personalizacji odtwarzacza
    const plyrOptions = {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
        // Możesz tutaj zmieniać kolory, np. dodając zmienne CSS
        // Zobacz dokumentację Plyr.io po więcej opcji

    };

    return <Plyr source={plyrSource} options={plyrOptions} style={{ '--plyr-color-main': '#c48290' }}/>;
}