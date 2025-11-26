import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Sparkles, Heart } from 'lucide-react';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 text-foreground">
          {t('about.title')}
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-6 h-6 text-accent-foreground" />
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              {t('about.intro')}
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-accent-foreground" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-accent-foreground" />
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                {t('about.current')}
              </p>
              <p className="text-sm font-medium text-primary">
                📍 {t('about.location')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
