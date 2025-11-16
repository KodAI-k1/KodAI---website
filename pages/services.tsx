import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { generatePageSEO } from '@/lib/seo';
import { FiCalendar, FiUsers, FiPhone } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Services() {
  const seoData = generatePageSEO('services');
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.appointment.title'),
      description: t('services.appointment.description'),
      icon: FiCalendar,
      features: [
        t('services.appointment.features.0'),
        t('services.appointment.features.1'),
        t('services.appointment.features.2'),
        t('services.appointment.features.3'),
        t('services.appointment.features.4')
      ],
    },
    {
      title: t('services.lead.title'),
      description: t('services.lead.description'),
      icon: FiUsers,
      features: [
        t('services.lead.features.0'),
        t('services.lead.features.1'),
        t('services.lead.features.2'),
        t('services.lead.features.3'),
        t('services.lead.features.4')
      ],
    },
    {
      title: t('services.voice.title'),
      description: t('services.voice.description'),
      icon: FiPhone,
      features: [
        t('services.voice.features.0'),
        t('services.voice.features.1'),
        t('services.voice.features.2'),
        t('services.voice.features.3'),
        t('services.voice.features.4')
      ],
    },
  ];

  return (
    <Layout>
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-light to-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              {t('services.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-neutral-50 dark:bg-primary-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary dark:text-white">
              {t('services.process.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-primary rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {t('services.process.consultation.title')}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {t('services.process.consultation.description')}
                </p>
              </div>
              
              <div className="bg-white dark:bg-primary rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {t('services.process.proposal.title')}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {t('services.process.proposal.description')}
                </p>
              </div>
              
              <div className="bg-white dark:bg-primary rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {t('services.process.development.title')}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {t('services.process.development.description')}
                </p>
              </div>
              
              <div className="bg-white dark:bg-primary rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  {t('services.process.launch.title')}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {t('services.process.launch.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              {t('services.cta.description')}
            </p>
            <Button href="/contact" variant="primary" size="lg">
              {t('services.cta.button')}
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
