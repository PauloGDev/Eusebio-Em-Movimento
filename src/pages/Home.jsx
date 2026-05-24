import EixosSection from "../components/EixosSection";
import FormularioSection from "../components/FormularioSection";
import HeroSection from "../components/HeroSection";
import ProgramaSection from "../components/ProgramaSection";
import VideoSection from "../components/VideoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <VideoSection />
      <ProgramaSection />
      <EixosSection />
      <FormularioSection />
    </main>
  );
}