import Navbar from "@/app/components/Navbar";
import HeroZareczyny from "@/app/zareczyny-marzen/components/HeroZareczyny";
import ProposalArt from "@/app/zareczyny-marzen/components/ProposalArt";
import MemoryCreators from "@/app/zareczyny-marzen/components/MemoryCreators";
import Masterpieces from "@/app/zareczyny-marzen/components/Masterpieces";
import ProcessSteps from "@/app/zareczyny-marzen/components/ProcessSteps";
import ContactMap from "@/app/zareczyny-marzen/components/ContactMap";
import ContactDetails from "@/app/zareczyny-marzen/components/FooterCTA";
import Footer from "@/app/components/footer";
import ScrollProgressBar from "@/app/components/ScrollProgressBar";

export default function ZareczynyMarzenPage() {
    return (
        <div className="bg-white">
            <Navbar />
            <ScrollProgressBar/>
            <main>
                <HeroZareczyny />
                <ProposalArt />
                <MemoryCreators />
                <Masterpieces />
                <ProcessSteps />
                <ContactMap />
                <ContactDetails />
            </main>
            <Footer />
        </div>
    );
}