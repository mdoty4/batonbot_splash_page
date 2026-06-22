import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeatureGrid } from './components/FeatureGrid';
import { BoardShowcase } from './components/BoardShowcase';
import { IntegrationsSection } from './components/IntegrationsSection';
import { HowItWorks } from './components/HowItWorks';
import { VideoTutorials } from './components/VideoTutorials';
import { InstallationSection } from './components/InstallationSection';
import { RoadmapSection } from './components/RoadmapSection';
import { ClosingCta } from './components/ClosingCta';
import { Footer } from './components/Footer';
import { SeoHead } from './components/SeoHead';

export default function App() {
  return (
    <>
      <SeoHead />
      <div className="min-h-screen bg-background-primary text-text-primary">
        <Navbar />
        <main role="main" aria-label="Main content">
          <HeroSection />
          <FeatureGrid />
          <BoardShowcase />
          <IntegrationsSection />
          <HowItWorks />
          <VideoTutorials />
          <InstallationSection />
          <RoadmapSection />
          <ClosingCta />
        </main>
        <Footer />
      </div>
    </>
  );
}
