import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Theater, Code, Instagram, MessageCircle, ExternalLink } from 'lucide-react';
import familyCartoon from '@/assets/family-cartoon.png';

interface ProjectItem {
  name: string;
  links?: { type: 'website' | 'instagram' | 'whatsapp'; url: string }[];
}

interface ProjectGroup {
  titleKey: string;
  icon: React.ReactNode;
  items: ProjectItem[];
  image?: string;
  accentColor: string;
  bgGradient: string;
}

export const ProjectsSection = () => {
  const { t } = useLanguage();

  const projectGroups: ProjectGroup[] = [
    {
      titleKey: 'projects.family',
      icon: <Heart className="h-6 w-6" />,
      items: [],
      image: familyCartoon,
      accentColor: 'text-rose-500',
      bgGradient: 'from-rose-500/10 via-rose-500/5 to-transparent',
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
      accentColor: 'text-violet-500',
      bgGradient: 'from-violet-500/10 via-violet-500/5 to-transparent',
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
      accentColor: 'text-emerald-500',
      bgGradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    },
  ];

  const getLinkStyles = (type: 'website' | 'instagram' | 'whatsapp') => {
    switch (type) {
      case 'instagram':
        return {
          icon: <Instagram className="h-4 w-4" />,
          className: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600',
        };
      case 'whatsapp':
        return {
          icon: <MessageCircle className="h-4 w-4" />,
          className: 'bg-emerald-500 text-white hover:bg-emerald-600',
        };
      default:
        return {
          icon: <ExternalLink className="h-4 w-4" />,
          className: 'bg-foreground/10 text-foreground hover:bg-foreground/20',
        };
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('projects.title')}
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          ❤️ 🎭 💻
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectGroups.map((group, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-card border border-border/50 hover:border-border transition-all duration-500 hover:shadow-xl`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.bgGradient} opacity-50`} />
              
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-2xl bg-background/80 backdrop-blur-sm shadow-sm ${group.accentColor}`}>
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold">{t(group.titleKey)}</h3>
                </div>

                {/* Image for Family */}
                {group.image && (
                  <div className="mb-4 overflow-hidden rounded-2xl bg-background/50 p-4">
                    <img
                      src={group.image}
                      alt={t(group.titleKey)}
                      className="w-full rounded-xl object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Items list */}
                {group.items.length > 0 && (
                  <div className="space-y-3">
                    {group.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="p-4 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/30 hover:border-border/60 transition-all"
                      >
                        <span className="text-foreground font-medium block mb-3">
                          {item.name}
                        </span>
                        {item.links && item.links.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.links.map((link, linkIndex) => {
                              const linkStyle = getLinkStyles(link.type);
                              return (
                                <a
                                  key={linkIndex}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${linkStyle.className}`}
                                >
                                  {linkStyle.icon}
                                  <span>
                                    {link.type === 'website'
                                      ? new URL(link.url).hostname.replace('www.', '')
                                      : link.type}
                                  </span>
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
