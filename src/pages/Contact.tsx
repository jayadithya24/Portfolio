import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Header isDark={isDark} onToggleTheme={toggle} />
      <main className="pt-24">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
