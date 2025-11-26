import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Theater, Code, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import familyCartoon from '@/assets/family-cartoon.jpeg';

interface ProjectItem {
  name: string;
  links?: { type: 'website' | 'instagram' | 'whatsapp'; url: string }[];
}

interface ProjectGroup {
  titleKey: string;
  icon: React.ReactNode;
  items: ProjectItem[];
  image?: string;
}

export const ProjectsSection = () => {
  const { t } = useLanguage();

  const projectGroups: ProjectGroup[] = [
    {
      titleKey: 'projects.family',
      icon: <Heart className="h-6 w-6" />,
      items: [],
      image: familyCartoon,
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
    },
    {
      titleKey: 'projects.tech',
      icon: <Code className="h-6 w-6" />,
      items: [
        {
          name: 'Vibe Coding',
          links: [
            { type: 'website', url: 'https://impro-shows.ch' },
            { type: 'website', url: 'https://my-tidbits.com' },
          ],
        },
      ],
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
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {group.icon}
                </div>
                <h3 className="text-xl font-semibold">{t(group.titleKey)}</h3>
              </div>

              {group.image && (
                <div className="mb-4">
                  <img
                    src={group.image}
                    alt={t(group.titleKey)}
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              )}

              {group.items.length > 0 && (
                <ul className="space-y-4">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex flex-col gap-2">
                      <span className="text-foreground font-medium">{item.name}</span>
                      {item.links && item.links.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {item.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {getLinkIcon(link.type)}
                              <span className="text-xs">
                                {link.type === 'website'
                                  ? new URL(link.url).hostname.replace('www.', '')
                                  : link.type}
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
