import InspirationGallery from "@/app/galeria/components/InspirationGallery";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";

export const metadata = {
    title: 'Galeria - Kreacja Niezapomnianych Zaręczyn i Ślubów',
    description: 'Zobacz naszą galerię inspiracji z niezapomnianych zaręczyn i ślubów. Poznaj nasze realizacje.',
};

export default function GalleryPage() {
    return (
        <main>
            <Navbar />
            {/* Możesz dodać sekcję Hero dla strony Galerii, jeśli chcesz, np. nagłówek i krótki opis */}
            <section className="bg-white pt-20 pb-10 sm:pt-28 sm:pb-16 text-center">
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">Nasza Galeria</h1>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 px-4">
                    Przeglądaj naszą kolekcję zdjęć z wyjątkowych zaręczyn i ślubów, które pomogliśmy zorganizować. Każda uroczystość to dla nas unikalna historia.
                </p>
            </section>

            {/* Główny komponent galerii */}
            <InspirationGallery />

            <Footer />
        </main>
    );
}