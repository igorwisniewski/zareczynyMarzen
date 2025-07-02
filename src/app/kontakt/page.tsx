import Navbar from "@/app/components/Navbar";
import ContactFormMap from "@/app/kontakt/components/ContactMap";
import ContactDetails from "@/app/kontakt/components/FooterCTA";
import Footer from "@/app/components/footer";

export default function Kontakt() {
    return (
        <div className="bg-white">
            <Navbar />
            <main>
                <ContactFormMap/>
                <ContactDetails/>
            </main>
            <Footer />
        </div>
    )
}