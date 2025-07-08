import WeddingChoice from "@/app/components/WeddingChoice";
import Navbar from "@/app/components/Navbar";
import ScrollProgressBar from "@/app/components/ScrollProgressBar";

export default function Home() {
  return (
      <div className="max-h-screen">
        <Navbar/>
        <ScrollProgressBar/>
        <WeddingChoice/>
      </div>
  );
}
