import { useLenisSetup } from '@/hooks/useLenis';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import ModuleOverview from '@/sections/ModuleOverview';
import GeschichteModule from '@/sections/GeschichteModule';
import KrankenversicherungModule from '@/sections/KrankenversicherungModule';
import RentenversicherungModule from '@/sections/RentenversicherungModule';

export default function Home() {
  useLenisSetup();

  return (
    <div className="relative">
      <Navigation />
      <main>
        <HeroSection />
        <ModuleOverview />
        <GeschichteModule />
        <KrankenversicherungModule />
        <RentenversicherungModule />
      </main>
      <Footer />
    </div>
  );
}
