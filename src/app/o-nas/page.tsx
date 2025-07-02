import Navbar from "@/app/components/Navbar";
import AboutHero from "@/app/o-nas/components/AboutHero";
import Philosophy from "@/app/o-nas/components/Philosophy";
import Values from "@/app/o-nas/components/Values";
import Differentiators from "@/app/o-nas/components/Differentiators";
import CooperationProcess from "@/app/o-nas/components/CooperationProcess";
import FinalCTA from "@/app/o-nas/components/FinalCTA";
import Footer from "@/app/components/footer";

export default function AboutPage() {
    return (
        <div className="bg-white">
            <Navbar />
            <main>
                <AboutHero />
                <Philosophy />
                <Values />
                <Differentiators />
                <CooperationProcess />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}