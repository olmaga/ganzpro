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
      icon: <Heart className="h-5 w-5" />,
      items: [],
      image: familyCartoon,
      imageAlt: 'Family illustration',
    },
    {
      titleKey: 'projects.impro',
      icon: <Theater className="h-5 w-5" />,
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
      icon: <Code className="h-5 w-5" />,
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

        <div className="space-y-8 max-w-5xl mx-auto">
          {projectGroups.map((group, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Image Side */}
                <div className="md:w-1/2 relative overflow-hidden">
                  <div className="aspect-[4/3] md:aspect-auto md:h-full">
                    <img
                      src={group.image}
                      alt={group.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary">
                      {group.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{t(group.titleKey)}</h3>
                  </div>

                  {group.items.length > 0 && (
                    <ul className="space-y-3">
                      {group.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
