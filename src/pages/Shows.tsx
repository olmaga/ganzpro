import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Clock, MapPin, Ticket, Users, Instagram, Globe, ExternalLink, MessageCircle, Mail } from 'lucide-react';
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
  {
    day: '19',
    month: 'Feb',
    year: '2026',
    time: '20:00 – 22:00 Uhr',
    title: 'Hunzi-Show',
    group: {
      name: "Robert's Freunde",
      instagram: 'https://www.instagram.com/robbie.illes/',
      website: '',
    },
    description: {
      en: 'We entertain the Hunziker-Areal in Zürich Örlikon.',
      de: 'Wir bespassen das Hunziker-Areal in Zürich Örlikon.',
    },
    venue: 'Hunzikerareal',
    address: 'Genossenschaftsstrasse 13, Zürich',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hunzikerareal+Genossenschaftsstrasse+13+Zürich',
    ticketUrl: 'https://robertstagework.com/hunzi-show/',
  },
  {
    day: '21',
    month: 'Feb',
    year: '2026',
    time: '20:00 – 22:30 Uhr',
    title: 'Maestro™',
    group: {
      name: 'anundpfirsich',
      instagram: 'https://instagram.com/anundpfirsich',
      website: 'https://pfirsi.ch',
    },
    description: {
      en: 'I play with anundpfirsich on the big stage. All against all.',
      de: 'Ich spiele bei anundpfirsich auf der grossen Bühne. Alle gegen Alle.',
    },
    venue: 'Theater im Zollhaus',
    address: 'Zollstrasse 121, Zürich',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Theater+im+Zollhaus+Zollstrasse+121+Zürich',
    ticketUrl: 'https://pfirsi.ch/events/anundpfirsich/show1737_sa.-21-02-2026_maestro/',
  },
  {
    day: '27',
    month: 'Feb',
    year: '2026',
    time: '20:00 – 22:00 Uhr',
    title: 'Moderation Theatersport',
    group: {
      name: 'Pastasalat',
      instagram: 'https://instagram.com/pastasalat_impro',
      website: '',
    },
    description: {
      en: 'I get to host the wonderful ensemble Pastasalat through the show.',
      de: 'Ich darf das wunderbare Ensemble Pastasalat durch die Show moderieren.',
    },
    venue: 'Elefant',
    address: 'Dorfstrasse 1, 6340 Baar',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Elefant+Dorfstrasse+1+6340+Baar',
    ticketUrl: 'https://elefant.ch/',
  },
  {
    day: '27',
    month: 'Mar',
    year: '2026',
    time: '19:30 – 22:00 Uhr',
    title: 'The Great Piggybank Showcase',
    group: {
      name: 'Piggybank',
      instagram: '',
      website: 'https://www.theaterida.ch',
    },
    description: {
      en: 'I play in a Maestro-like format with & against many other players from the community. All against all.',
      de: 'Ich spiele in einem Maestro-ähnlichen Format mit & gegen viele andere Spieler:innen aus der Community. Alle gegen Alle.',
    },
    venue: 'Theater Ida',
    address: 'Aargauerstrasse 80, Zürich',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Theater+Ida+Aargauerstrasse+80+Zürich',
    ticketUrl: 'https://www.theaterida.ch/event/the-great-piggybank-showcase/',
  },
  {
    day: '12',
    month: 'Apr',
    year: '2026',
    time: '19:00 – 21:30 Uhr',
    title: 'Community Stage',
    group: {
      name: 'Theater Freudig',
      instagram: '',
      website: 'https://theaterfreudig.ch',
    },
    description: {
      en: '4 groups on one stage, the community celebrates itself.',
      de: '4 Gruppen nacheinander auf einer Bühne, die Community feiert sich selbst.',
    },
    venue: 'Töpferei',
    address: 'Zürich',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Töpferei+Zürich',
    ticketUrl: 'https://pfirsi.ch',
  },
  {
    day: '16',
    month: 'Apr',
    year: '2026',
    time: '20:00 – 22:15 Uhr',
    title: 'Drei Duos am Dritten Donnerstag',
    group: {
      name: 'zweierlei',
      instagram: 'https://instagram.com/zweierlei.impro',
      website: 'https://zweierlei-impro.ch',
    },
    description: {
      en: '3 duos - 3 different formats - 3x fun.',
      de: '3 Duos - 3 verschiedene Formate - 3x Spass.',
    },
    venue: 'Theater Ida',
    address: 'Aargauerstrasse 80, Zürich',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Theater+Ida+Aargauerstrasse+80+Zürich',
    ticketUrl: 'https://eventfrog.ch/en/p/theatre-stage/theatre/drei-duos-am-dritten-donnerstag-improtheater-7415088412124835450.html',
  },
  {
    day: '19',
    month: 'Apr',
    year: '2026',
    time: '10:00 – 13:30 Uhr',
    title: 'Theatersport',
    group: {
      name: 'anundpfirsich',
      instagram: 'https://instagram.com/anundpfirsich',
      website: 'https://pfirsi.ch',
    },
    description: {
      en: '2 teams play against each other.',
      de: '2 Teams spielen spielend gegeneinander.',
    },
    venue: 'Turbine Theater',
    address: 'Langnau am Albis',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Turbine+Theater+Langnau+am+Albis',
    ticketUrl: 'https://www.turbinetheater.ch/event/anundpfirsich-guete-morge/',
  },
  {
    day: '02',
    month: 'May',
    year: '2026',
    time: '20:00 – 22:30 Uhr',
    title: 'Maestro™',
    group: {
      name: 'anundpfirsich',
      instagram: 'https://instagram.com/anundpfirsich',
      website: 'https://pfirsi.ch',
    },
    description: {
      en: 'I play with anundpfirsich on the big stage. All against all.',
      de: 'Ich spiele bei anundpfirsich auf der grossen Bühne. Alle gegen Alle.',
    },
    venue: 'Theater im Zollhaus',
    address: 'Zollstrasse 121, Zürich',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Theater+im+Zollhaus+Zollstrasse+121+Zürich',
    ticketUrl: 'https://pfirsi.ch/events/anundpfirsich/show1768_sa.-02-05-2026_maestro/',
  },
  {
    day: '10',
    month: 'May',
    year: '2026',
    time: '19:00 – 21:30 Uhr',
    title: 'Community Stage',
    group: {
      name: 'zweierlei',
      instagram: 'https://instagram.com/zweierlei.impro',
      website: 'https://zweierlei-impro.ch',
    },
    description: {
      en: '4 groups on one stage, the community celebrates itself.',
      de: '4 Gruppen nacheinander auf einer Bühne, die Community feiert sich selbst.',
    },
    venue: 'Töpferei',
    address: 'Zürich',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Töpferei+Zürich',
    ticketUrl: 'https://pfirsi.ch',
  },
  {
    day: '23',
    month: 'May',
    year: '2026',
    time: '20:00 – 22:30 Uhr',
    title: 'Theatersport',
    group: {
      name: 'anundpfirsich',
      instagram: 'https://instagram.com/anundpfirsich',
      website: 'https://pfirsi.ch',
    },
    description: {
      en: '2 teams play against each other.',
      de: '2 Teams spielen spielend gegeneinander.',
    },
    venue: 'Theater im Zollhaus',
    address: 'Zollstrasse 121, Zürich',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Theater+im+Zollhaus+Zollstrasse+121+Zürich',
    ticketUrl: 'https://pfirsi.ch/events/anundpfirsich/show1777_sa.-23-05-2026_theatersport/',
  },
  {
    day: '06',
    month: 'Jun',
    year: '2026',
    time: '13:00 – 14:00 Uhr',
    title: 'Heubodä Festival',
    group: {
      name: 'Theater Freudig',
      instagram: '',
      website: 'https://theaterfreudig.ch',
    },
    description: {
      en: 'We perform ZaGeWaHu, improv comedy for & with kids.',
      de: 'Wir spielen ZaGeWaHu, Improtheater für & mit Kindern.',
    },
    venue: 'Heubodä Festival',
    address: 'Tobelhofstrasse 231, Zürich',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tobelhofstrasse+231+Zürich',
    ticketUrl: 'https://www.instagram.com/heubode/',
  },
];

const monthToNumber: Record<string, number> = {
  'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
  'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
};

function ShowsContent() {
  const { t, language } = useLanguage();

  // Filter out past shows
  const upcomingShows = shows.filter((show) => {
    const showDate = new Date(
      parseInt(show.year),
      monthToNumber[show.month],
      parseInt(show.day),
      23, 59, 59 // End of the show day
    );
    return showDate >= new Date();
  });
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
        <section className="py-10 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-3">
              {upcomingShows.map((show, index) => (
                <article 
                  key={index}
                  className="bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-0">
                    {/* Date Column */}
                    <div className="bg-primary text-primary-foreground p-4 lg:p-5 flex lg:flex-col items-center justify-center gap-1 lg:min-w-[90px]">
                      <span className="text-3xl lg:text-4xl font-bold leading-none">{show.day}</span>
                      <div className="flex lg:flex-col items-center gap-0.5">
                        <span className="text-sm font-medium uppercase">{show.month}</span>
                        <span className="text-xs opacity-80">{show.year}</span>
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="p-4 lg:p-5 space-y-3">
                      {/* Title & Description */}
                      <div>
                        <h2 className="text-xl lg:text-2xl font-serif font-bold text-foreground mb-1">
                          {show.title}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {show.description[language]}
                        </p>
                      </div>
                      
                      {/* Info Row */}
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                        {/* Time */}
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-4 w-4 text-primary" />
                          <span className="text-foreground">{show.time}</span>
                        </div>
                        
                        {/* Group */}
                        <div className="flex items-center gap-1.5">
                          <Users className="h-4 w-4 text-primary" />
                          <span className="text-foreground">{show.group.name}</span>
                          {show.group.instagram && (
                            <a href={show.group.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                              <Instagram className="h-3.5 w-3.5" />
                            </a>
                          )}
                          {show.group.website && (
                            <a href={show.group.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                              <Globe className="h-3.5 w-3.5" />
                            </a>
                          )}
                        </div>
                        
                        {/* Location */}
                        <a 
                          href={show.mapsUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 group hover:text-primary transition-colors"
                        >
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-foreground group-hover:text-primary">{show.venue}</span>
                          <ExternalLink className="h-3 w-3 text-muted-foreground group-hover:text-primary" />
                        </a>
                      </div>
                    </div>
                    
                    {/* CTA Column */}
                    <div className="p-4 lg:p-5 flex items-center justify-center lg:border-l border-t lg:border-t-0 border-border bg-muted/30">
                      <Button size="default" className="w-full lg:w-auto" asChild>
                        <a href={show.ticketUrl} target="_blank" rel="noopener noreferrer">
                          <Ticket className="mr-1.5 h-4 w-4" />
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

        {/* Notifications Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground text-center mb-12">
              {t('shows.notifications.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* WhatsApp Card */}
              <a 
                href="https://whatsapp.com/channel/0029VaRxmvM002THR30tQY2k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-card border border-border p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">
                      {t('shows.notifications.whatsapp')}
                    </p>
                  </div>
                  <span className="text-primary text-sm font-medium group-hover:underline">
                    {language === 'de' ? 'Kanal abonnieren →' : 'Subscribe to channel →'}
                  </span>
                </div>
              </a>

              {/* Newsletter Card */}
              <a 
                href="https://zweierlei-impro.ch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-card border border-border p-8 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">zweierlei</h3>
                    <p className="text-muted-foreground text-sm">
                      {t('shows.notifications.newsletter')}
                    </p>
                  </div>
                  <span className="text-primary text-sm font-medium group-hover:underline">
                    zweierlei-impro.ch →
                  </span>
                </div>
              </a>
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
