import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase } from 'lucide-react';

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

function ExperienceItem({ role, company, period, description }: ExperienceItemProps) {
  return (
    <div className="flex gap-4 group">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
        <div className="w-0.5 h-full bg-border mt-4" />
      </div>
      <div className="pb-12">
        <h3 className="text-xl font-semibold text-foreground">{role}</h3>
        <p className="text-primary font-medium">{company}</p>
        <p className="text-sm text-muted-foreground mt-1">{period}</p>
        <p className="text-muted-foreground mt-3">{description}</p>
      </div>
    </div>
  );
}

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t('experience.docbox.role'),
      company: t('experience.docbox.company'),
      period: t('experience.docbox.period'),
      description: t('experience.docbox.desc'),
    },
    {
      role: t('experience.testingtime.role'),
      company: t('experience.testingtime.company'),
      period: t('experience.testingtime.period'),
      description: t('experience.testingtime.desc'),
    },
    {
      role: t('experience.doodle.role'),
      company: t('experience.doodle.company'),
      period: t('experience.doodle.period'),
      description: t('experience.doodle.desc'),
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-16 text-foreground">
          {t('experience.title')}
        </h2>
        
        <div className="max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
