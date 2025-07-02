'use client' // jeśli jesteś w app routerze

import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
    const [scrollHeight, setScrollHeight] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight
            const scrollY = window.scrollY
            const progress = (scrollY / totalHeight) * 100
            setScrollHeight(progress)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className="scroll-progress-bar -z-10"
            style={{ height: `${scrollHeight}vh` }}
        />
    )
}
