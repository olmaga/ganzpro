import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Ticket, Users, Instagram, Globe, ExternalLink } from 'lucide-react';
import showsBg from '@/assets/shows-bg.jpg';

const shows = [
  {
    day: '16',
    month: 'Jan',
    year: '2026',
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
    venue: 'Theater Ida',
    address: 'Aargauerstrasse 80, Zürich',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Theater+Ida+Aargauerstrasse+80+Zürich',
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
                  className="bg-card border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-0">
                    {/* Date Column */}
                    <div className="bg-primary text-primary-foreground p-6 lg:p-8 flex lg:flex-col items-center justify-center gap-2 lg:gap-1 lg:min-w-[120px]">
                      <span className="text-4xl lg:text-5xl font-bold leading-none">{show.day}</span>
                      <div className="flex lg:flex-col items-center gap-1">
                        <span className="text-lg font-medium uppercase">{show.month}</span>
                        <span className="text-sm opacity-80">{show.year}</span>
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="p-6 lg:p-8 space-y-5">
                      {/* Title & Description */}
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-2">
                          {show.title}
                        </h2>
                        <p className="text-muted-foreground text-lg">
                          {show.description[language]}
                        </p>
                      </div>
                      
                      {/* Info Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Time */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-foreground font-medium">{show.time}</span>
                        </div>
                        
                        {/* Group */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Users className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-foreground font-medium">{show.group.name}</span>
                            <a href={show.group.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                              <Instagram className="h-4 w-4" />
                            </a>
                            <a href={show.group.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                              <Globe className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                        
                        {/* Location */}
                        <a 
                          href={show.mapsUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 sm:col-span-2 group hover:bg-muted/50 -mx-2 px-2 py-2 transition-colors"
                        >
                          <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <MapPin className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <span className="text-foreground font-medium block">{show.venue}</span>
                            <span className="text-muted-foreground text-sm">{show.address}</span>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </a>
                      </div>
                    </div>
                    
                    {/* CTA Column */}
                    <div className="p-6 lg:p-8 flex items-center justify-center lg:border-l border-t lg:border-t-0 border-border bg-muted/30">
                      <Button size="lg" className="w-full lg:w-auto" asChild>
                        <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer">
                          <Ticket className="mr-2 h-5 w-5" />
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
