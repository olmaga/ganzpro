import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="text-primary-foreground/80 text-lg mb-4 animate-fade-in">
          {t('hero.greeting')}
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6">
          {t('hero.name')}
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.hook')}
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {t('hero.cta')}
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-foreground/70" />
      </div>
    </section>
  );
}
