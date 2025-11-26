import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

export function Header() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-semibold text-foreground hover:text-primary transition-colors">
          ganz.pro
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo('about')}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            {t('nav.about')}
          </button>
          <button
            onClick={() => scrollTo('experience')}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            {t('nav.experience')}
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            {t('nav.contact')}
          </button>
        </nav>

        <LanguageToggle />
      </div>
    </header>
  );
}
