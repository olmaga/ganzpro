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
  name?: string;
  nameKey?: string;
  links?: ProjectLink[];
}

interface ProjectGroup {
  titleKey: string;
  icon: React.ReactNode;
  items: ProjectItem[];
  image: string;
  imageAlt: string;
  imagePosition?: 'top' | 'center';
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
      imagePosition: 'center',
    },
    {
      titleKey: 'projects.impro',
      icon: <Theater className="h-5 w-5" />,
      items: [
        {
          nameKey: 'projects.impro.player',
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
          nameKey: 'projects.impro.zagewahu',
          links: [{ type: 'instagram', url: 'https://instagram.com/zagewahu' }],
        },
      ],
      image: improTheater,
      imageAlt: 'Improv theater performers',
      imagePosition: 'top',
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
      imagePosition: 'top',
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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectGroups.map((group, index) => (
            <div
              key={index}
              className="group bg-card overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Full-width image */}
              <div className="overflow-hidden">
                <img
                  src={group.image}
                  alt={group.imageAlt}
                  className={`w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500 ${
                    group.imagePosition === 'top' ? 'object-top' : 'object-center'
                  }`}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary">{t(group.titleKey)}</h3>
                </div>

                {group.items.length > 0 && (
                  <ul className="space-y-3">
                    {group.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="border-l-2 border-primary/30 pl-3 py-1"
                      >
                        <span className="text-foreground font-medium text-sm block mb-1.5">
                          {item.nameKey ? t(item.nameKey) : item.name}
                        </span>
                        {item.links && item.links.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
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
          ))}
        </div>
      </div>
    </section>
  );
};
