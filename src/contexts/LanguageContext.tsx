import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language || navigator.languages?.[0] || 'en';
  return browserLang.toLowerCase().startsWith('de') ? 'de' : 'en';
};

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Oliver Ganz',
    'hero.hook': 'I help with projects that make the world better.',
    'hero.cta': 'Inspire me with your project',
    
    // About
    'about.title': 'About Me',
    'about.intro': 'I thrive on spontaneity – whether on stage as an improv player or building startups.',
    'about.description': 'After 10 intense but amazing years, I left TestingTime at the end of 2024 together with my co-founder. We built TestingTime, led it through 3 funding rounds, successfully sold it to Norstat, and turned it into a highly profitable company. It was an incredible journey.',
    'about.current': 'Now it\'s time for a new chapter. I\'m focusing on projects that make the world better, while making time for family, my two boys, my garden, and my passion – improv theater.',
    'about.location': 'Zurich, Switzerland',
    
    // Experience
    'experience.title': 'Experience',
    'experience.testingtime.role': 'CTO & Co-Founder',
    'experience.testingtime.company': 'TestingTime',
    'experience.testingtime.period': '2015 - 2024 · 10 years',
    'experience.testingtime.desc': 'Built from ground up, 3 funding rounds, successful exit to Norstat',
    
    'experience.docbox.role': 'Board Member',
    'experience.docbox.company': 'docbox - Visionary AG',
    'experience.docbox.period': '2022 - Present',
    'experience.docbox.desc': 'Strategic advisory for medical tech company',
    
    'experience.doodle.role': 'Senior Software Engineer',
    'experience.doodle.company': 'Doodle AG',
    'experience.doodle.period': '2010 - 2014 · 4+ years',
    'experience.doodle.desc': 'Full-stack development for scheduling platform',
    
    // Projects
    'projects.title': 'Where I Invest My Time',
    'projects.family': 'Family',
    'projects.impro': 'Improv Theater',
    'projects.tech': 'Tech',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Interested in working together on a project that matters?',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    
    // Footer
    'footer.rights': '© 2024 Oliver Ganz. All rights reserved.',
  },
  de: {
    // Navigation
    'nav.about': 'Über mich',
    'nav.experience': 'Erfahrung',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.greeting': 'Hallo, ich bin',
    'hero.name': 'Oliver Ganz',
    'hero.hook': 'Ich helfe bei Projekten, welche die Welt besser machen.',
    'hero.cta': 'Begeistere mich von deinem Projekt',
    
    // About
    'about.title': 'Über mich',
    'about.intro': 'Ich lebe für Spontaneität – ob auf der Bühne als Impro-Spieler oder beim Aufbau von Startups.',
    'about.description': 'Nach 10 intensiven, aber extrem guten Jahren habe ich Ende 2024 gemeinsam mit meinem Mitgründer unser Start-up TestingTime verlassen. Wir haben TestingTime aufgebaut, durch 3 Finanzierungsrunden geführt, erfolgreich an Norstat verkauft und zu einer hochprofitablen Firma gemacht. Es war eine unglaubliche Reise.',
    'about.current': 'Jetzt ist es Zeit für einen neuen Abschnitt. Ich konzentriere mich auf Projekte, die die Welt besser machen, während ich Zeit für Familie, meine zwei kleinen Jungs, meinen Garten und meine Leidenschaft – das Improtheater – finde.',
    'about.location': 'Zürich, Schweiz',
    
    // Experience
    'experience.title': 'Erfahrung',
    'experience.testingtime.role': 'CTO & Mitgründer',
    'experience.testingtime.company': 'TestingTime',
    'experience.testingtime.period': '2015 - 2024 · 10 Jahre',
    'experience.testingtime.desc': 'Von Grund auf aufgebaut, 3 Finanzierungsrunden, erfolgreicher Exit an Norstat',
    
    'experience.docbox.role': 'Verwaltungsrat',
    'experience.docbox.company': 'docbox - Visionary AG',
    'experience.docbox.period': '2022 - Heute',
    'experience.docbox.desc': 'Strategische Beratung für MedTech-Unternehmen',
    
    'experience.doodle.role': 'Senior Software Engineer',
    'experience.doodle.company': 'Doodle AG',
    'experience.doodle.period': '2010 - 2014 · 4+ Jahre',
    'experience.doodle.desc': 'Full-Stack-Entwicklung für Terminplanungsplattform',
    
    // Projects
    'projects.title': 'Wo ich meine Zeit investiere',
    'projects.family': 'Familie',
    'projects.impro': 'Improtheater',
    'projects.tech': 'Tech',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Interesse an einer Zusammenarbeit für ein Projekt, das zählt?',
    'contact.email': 'E-Mail',
    'contact.linkedin': 'LinkedIn',
    
    // Footer
    'footer.rights': '© 2024 Oliver Ganz. Alle Rechte vorbehalten.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getBrowserLanguage);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
