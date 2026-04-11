import { useTheme } from '@/hooks/useTheme';
import CertificateSection from '@/components/CertificateSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CertificatePage() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Header isDark={isDark} onToggleTheme={toggle} />
      <main className="pt-24">
        <CertificateSection />
      </main>
      <Footer />
    </div>
  );
}
