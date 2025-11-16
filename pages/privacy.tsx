import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Privacy() {
  const { t } = useLanguage();
  
  return (
    <Layout>
      <SEO
        title="Privacy Policy - KodAI"
        description="KodAI's privacy policy outlining how we collect, use, and protect your personal information."
      />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-light to-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('privacy.title')}
            </h1>
            <p className="text-xl text-neutral-300">
              {t('privacy.lastUpdated')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <div className="text-neutral-700 dark:text-neutral-300 space-y-6">
              <p>
                {t('privacy.intro')}
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">{t('privacy.infoCollect.title')}</h2>
              <p>
                {t('privacy.infoCollect.description')}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                {['0', '1', '2', '3'].map((index) => (
                  <li key={index}>{t(`privacy.infoCollect.items.${index}`)}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">{t('privacy.howWeUse.title')}</h2>
              <p>{t('privacy.howWeUse.description')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {['0', '1', '2', '3'].map((index) => (
                  <li key={index}>{t(`privacy.howWeUse.items.${index}`)}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">{t('privacy.dataProtection.title')}</h2>
              <p>
                {t('privacy.dataProtection.description')}
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">{t('privacy.yourRights.title')}</h2>
              <p>{t('privacy.yourRights.description')}</p>
              <ul className="list-disc pl-6 space-y-2">
                {['0', '1', '2', '3'].map((index) => (
                  <li key={index}>{t(`privacy.yourRights.items.${index}`)}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">{t('privacy.contact.title')}</h2>
              <p>
                {t('privacy.contact.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
