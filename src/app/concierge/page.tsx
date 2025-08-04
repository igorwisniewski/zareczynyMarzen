// app/concierge/page.js

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import ScrollProgressBar from "@/app/components/ScrollProgressBar";
import HeroConcierge from "@/app/concierge/components/HeroConcierge";
import ConciergeIntro from "@/app/concierge/components/ConciergeIntro";
import ConciergeProcess from "@/app/concierge/components/ConciergeProcess";
import ConciergeCTA from "@/app/concierge/components/ConciergeCTA";
import FeaturedDream from "@/app/concierge/components/FeaturedDream";

export default function ConciergePage() {
    return (
        <div className="bg-white">
            <Navbar />
            <ScrollProgressBar/>
            <main>
                <HeroConcierge />
                <ConciergeIntro />
                <ConciergeProcess />
                <FeaturedDream/>
                <ConciergeCTA />
            </main>
        <Footer />
        </div>
    );
}