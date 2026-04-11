import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

export default function Index() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Header isDark={isDark} onToggleTheme={toggle} />
      <HeroSection />
      <Footer />
    </div>
  );
}
