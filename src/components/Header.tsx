import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import profileImg from '@/assets/profile.jpg';

export function Header() {
  const { t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollTo = (id: string) => {
    if (isHomePage) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img src={profileImg} alt="Oliver Ganz" className="h-10 w-10 rounded-full object-cover" />
        </Link>
        
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
          <Link
            to="/shows"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            {t('nav.shows')}
          </Link>
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
