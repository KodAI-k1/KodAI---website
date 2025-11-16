import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Terms() {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <SEO
        title="Terms of Service - KodAI"
        description="KodAI's terms of service outlining the rules and regulations for using our website and services."
      />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-light to-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('terms.title')}
            </h1>
            <p className="text-xl text-neutral-300">
              {t('terms.lastUpdated')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <div className="text-neutral-700 dark:text-neutral-300 space-y-6">
              <p>
                {t('terms.intro')}
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">{t('terms.useOfServices.title')}</h2>
              <p>
                {t('terms.useOfServices.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {['0', '1', '2', '3'].map((index) => (
                  <li key={index}>{t(`terms.useOfServices.items.${index}`)}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">{t('terms.intellectualProperty.title')}</h2>
              <p>
                {t('terms.intellectualProperty.description')}
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">{t('terms.liability.title')}</h2>
              <p>
                {t('terms.liability.description')}
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">{t('terms.changes.title')}</h2>
              <p>
                {t('terms.changes.description')}
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">{t('terms.contact.title')}</h2>
              <p>
                {t('terms.contact.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
