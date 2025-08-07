import WeddingChoice from "@/app/components/WeddingChoice";
import Navbar from "@/app/components/Navbar";
import ScrollProgressBar from "@/app/components/ScrollProgressBar";
import VideoShowcase from "@/app/components/VideoShowcase";

export default function Home() {
  return (
      <div className="max-h-screen">
        <Navbar/>
        <ScrollProgressBar/>
          <VideoShowcase/>
        <WeddingChoice/>
      </div>
  );
}
