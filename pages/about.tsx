import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Button from '@/components/Button';
import { generatePageSEO } from '@/lib/seo';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const seoData = generatePageSEO('about');
  const { t } = useLanguage();

  return (
    <Layout>
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-gradient-to-br from-primary via-primary-light to-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed mt-6">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                {t('home.cta.primary')}
              </Button>
              <Button href="/services" variant="outline" size="lg">
                {t('home.cta.secondary')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
