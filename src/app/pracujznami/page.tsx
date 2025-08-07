import Navbar from "@/app/components/Navbar";
import CareersHero from "@/app/pracujznami/components/CareersHero";
import Values from "@/app/pracujznami/components/Values";
import OpenPositions from "@/app/pracujznami/components/OpenPositions";
import Footer from "@/app/components/footer";
import CareersContact from "@/app/pracujznami/components/ContactForm";


export default function CareersPage() {
    return (
        <div className="bg-white">
            <Navbar />
            <main>
                <CareersHero />
                <Values />
                <OpenPositions />
                <CareersContact/>
            </main>
            <Footer/>
        </div>
    );
}