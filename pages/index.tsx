import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import Button from '@/components/Button';
import { FiCalendar, FiUsers, FiPhone } from 'react-icons/fi';
import { generatePageSEO } from '@/lib/seo';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const seoData = generatePageSEO('home');
  const { t } = useLanguage();

  const services = [
    {
      title: t('home.services.appointment.title'),
      description: t('home.services.appointment.description'),
      icon: FiCalendar,
      href: '/services',
      features: [
        t('home.services.appointment.features.0'),
        t('home.services.appointment.features.1'),
        t('home.services.appointment.features.2')
      ],
    },
    {
      title: t('home.services.lead.title'),
      description: t('home.services.lead.description'),
      icon: FiUsers,
      href: '/services',
      features: [
        t('home.services.lead.features.0'),
        t('home.services.lead.features.1'),
        t('home.services.lead.features.2')
      ],
    },
    {
      title: t('home.services.voice.title'),
      description: t('home.services.voice.description'),
      icon: FiPhone,
      href: '/services',
      features: [
        t('home.services.voice.features.0'),
        t('home.services.voice.features.1'),
        t('home.services.voice.features.2')
      ],
    },
  ];

  const caseStudies = [
    {
      title: 'No-Code AI Success Stories',
      client: 'Verulean',
      description: '5 inspiring automation wins demonstrating how small businesses leverage no-code AI tools for rapid transformation.',
      image: 'https://res.cloudinary.com/dyymsibzl/image/fetch/w_750,h_750,c_fill,g_auto,f_auto,q_auto:good/https://cvcudhurkxayqjwlkxnh.supabase.co/storage/v1/object/images/business-maze-automation-solutions',
      tags: ['No-Code', 'Small Business', 'Success Stories'],
      href: 'https://verulean.com/blogs/no-code-ai-tools-low-code-automation-platforms/no-code-ai-success-stories-5-small-business-automation-wins/',
    },
    {
      title: 'AI Tools Driving Business Growth in 2025',
      client: 'DoneForYou',
      description: 'Case study showcasing small businesses winning with cutting-edge AI tools and automation strategies in 2025.',
      image: 'https://i0.wp.com/cdn.leonardo.ai/users/59c67290-1df5-4120-bd56-4a114980a11f/generations/11b10de2-c2aa-4748-81e4-b9410ea4d24d/segments/1%3A1%3A1/Lucid_Realism_high_dynamic_range_HDR_photography_of_Create_a_h_0.jpg?ssl=1',
      tags: ['AI Tools', '2025', 'Growth'],
      href: 'https://doneforyou.com/case-study-small-businesses-winning-ai-tools-2025/',
    },
    {
      title: '101 Real-World Generative AI Use Cases',
      client: 'Google Cloud',
      description: 'Comprehensive collection of generative AI use cases from industry leaders showing practical implementations.',
      image: 'https://storage.googleapis.com/gweb-cloudblog-publish/images/1001-real-world-gen-ai-use-cases-google-cl.max-2000x2000.png',
      tags: ['Generative AI', 'Industry Leaders', 'Use Cases'],
      href: 'https://cloud.google.com/transform/101-real-world-generative-ai-use-cases-from-industry-leaders',
    },
  ];


  return (
    <Layout>
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <Hero
        subtitle={t('home.hero.subtitle')}
        title={t('home.hero.title')}
        description={t('home.hero.description')}
        primaryCTA={{ text: t('home.hero.primaryCTA'), href: '/contact' }}
        secondaryCTA={{ text: t('home.hero.secondaryCTA'), href: '/portfolio' }}
      />

      {/* Services Section */}
      <section className="section-padding bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-white">
              {t('home.services.title')}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              {t('home.services.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/services" variant="primary" size="lg">
              {t('home.services.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-neutral-50 dark:bg-primary-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-white">
              {t('home.caseStudies.title')}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              {t('home.caseStudies.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/portfolio" variant="outline" size="lg">
              {t('home.caseStudies.cta')}
            </Button>
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
