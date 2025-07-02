import Navbar from "@/app/components/Navbar";
import HeroSlub from "@/app/slub-marzen/components/HeroSlub";
import Experience from "@/app/slub-marzen/components/Experience";
import Packages from "@/app/slub-marzen/components/Packages";
import InspirationGallery from "@/app/slub-marzen/components/InspirationGallery";
import Testimonials from "@/app/slub-marzen/components/Testimonials";
import FooterCTA from "@/app/slub-marzen/components/FooterCTA";
import Features from "@/app/slub-marzen/components/Features";
import Footer from "@/app/components/footer";
import ScrollProgressBar from "@/app/components/ScrollProgressBar";


export default function SlubMarzenPage() {
    return (
        <div className="bg-white">
            <Navbar />
            <ScrollProgressBar/>
            <main>
                <HeroSlub />
                <Features />
                <Experience />
                <Packages />
                <InspirationGallery />
                <Testimonials />
                <FooterCTA />
            </main>
                <Footer />
        </div>
    );
}