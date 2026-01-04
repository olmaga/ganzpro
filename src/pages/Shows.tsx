import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Ticket, Users, Instagram, Globe } from 'lucide-react';
import showsBg from '@/assets/shows-bg.jpg';

const shows = [
  {
    date: '16. Jan. 2026',
    time: '19:30 – 22:00 Uhr',
    title: 'Theatersportliga',
    group: {
      name: 'zweierlei',
      instagram: 'https://instagram.com/zweierlei.impro',
      website: 'https://zweierlei-impro.ch',
    },
    description: {
      en: 'We play improv comedy.',
      de: 'Wir spielen Improv Comedy.',
    },
    location: 'Theater Ida, Zürich, Aargauerstrasse 80',
    ticketUrl: 'https://eventfrog.ch/de/p/theater-buehne/theater/ida-theatersport-liga-03-01-2026-de-7352584931850106851.html',
  },
];

function ShowsContent() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-40 pb-32 md:pt-56 md:pb-40">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${showsBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
              {t('shows.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
              {t('shows.subtitle')}
            </p>
          </div>
        </section>

        {/* Shows List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-6">
              {shows.map((show, index) => (
                <article 
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
                        {show.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {show.description[language]}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{show.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{show.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{show.group.name}</span>
                          <a href={show.group.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <Instagram className="h-4 w-4" />
                          </a>
                          <a href={show.group.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <Globe className="h-4 w-4" />
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{show.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button asChild>
                        <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer">
                          <Ticket className="mr-2 h-4 w-4" />
                          {t('shows.tickets')}
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const Shows = () => {
  return (
    <LanguageProvider>
      <ShowsContent />
    </LanguageProvider>
  );
};

export default Shows;
