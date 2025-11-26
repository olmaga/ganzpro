import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          {t('contact.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            size="lg"
            className="min-w-[200px]"
          >
            <a href="mailto:oliver@ganz.pro">
              <Mail className="w-5 h-5 mr-2" />
              {t('contact.email')}
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="min-w-[200px]"
          >
            <a 
              href="https://linkedin.com/in/oliverganz" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              {t('contact.linkedin')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
