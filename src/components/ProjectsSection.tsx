import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Theater, Code, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import familyCartoon from '@/assets/family-cartoon.png';
import improTheater from '@/assets/impro-theater.png';
import techShows from '@/assets/tech-impro-shows.png';

interface ProjectLink {
  type: 'website' | 'instagram' | 'whatsapp';
  url: string;
  label?: string;
}

interface ProjectItem {
  name: string;
  links?: ProjectLink[];
}

interface ProjectGroup {
  titleKey: string;
  icon: React.ReactNode;
  items: ProjectItem[];
  image: string;
  imageAlt: string;
}

export const ProjectsSection = () => {
  const { t } = useLanguage();

  const projectGroups: ProjectGroup[] = [
    {
      titleKey: 'projects.family',
      icon: <Heart className="h-6 w-6" />,
      items: [],
      image: familyCartoon,
      imageAlt: 'Family illustration',
    },
    {
      titleKey: 'projects.impro',
      icon: <Theater className="h-6 w-6" />,
      items: [
        {
          name: 'Ich als Spieler (olidefux)',
          links: [
            { type: 'instagram', url: 'https://instagram.com/olidefux' },
            { type: 'whatsapp', url: 'https://whatsapp.com/channel/0029VaRxmvM002THR30tQY2k' },
          ],
        },
        {
          name: 'zweierlei',
          links: [
            { type: 'website', url: 'https://zweierlei-impro.ch' },
            { type: 'instagram', url: 'https://instagram.com/zweierlei.impro' },
          ],
        },
        {
          name: 'Theater Freudig',
          links: [],
        },
        {
          name: 'ZaGeWaHu - Impro für Kinder',
          links: [{ type: 'instagram', url: 'https://instagram.com/zagewahu' }],
        },
      ],
      image: improTheater,
      imageAlt: 'Improv theater performers',
    },
    {
      titleKey: 'projects.tech',
      icon: <Code className="h-6 w-6" />,
      items: [
        {
          name: 'Vibe Coding',
          links: [
            { type: 'website', url: 'https://impro-shows.ch', label: 'impro-shows.ch' },
            { type: 'website', url: 'https://my-tidbits.com', label: 'my-tidbits.com' },
          ],
        },
      ],
      image: techShows,
      imageAlt: 'impro-shows.ch website screenshot',
    },
  ];

  const getLinkIcon = (type: 'website' | 'instagram' | 'whatsapp') => {
    switch (type) {
      case 'instagram':
        return <Instagram className="h-4 w-4" />;
      case 'whatsapp':
        return <MessageCircle className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('projects.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectGroups.map((group, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold">{t(group.titleKey)}</h3>
              </div>

              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={group.image}
                  alt={group.imageAlt}
                  className="w-full rounded-xl object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {group.items.length > 0 && (
                <ul className="space-y-4">
                  {group.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="text-foreground font-medium block mb-2">
                        {item.name}
                      </span>
                      {item.links && item.links.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-background border border-border hover:border-primary hover:text-primary transition-colors"
                            >
                              {getLinkIcon(link.type)}
                              <span>
                                {link.label || (link.type === 'website'
                                  ? new URL(link.url).hostname.replace('www.', '')
                                  : link.type)}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
