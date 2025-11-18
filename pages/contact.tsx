import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Button from '@/components/Button';
import { generatePageSEO } from '@/lib/seo';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const seoData = generatePageSEO('contact');
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <SEO {...seoData} />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary-light to-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              {t('contact.hero.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary dark:text-white">
                {t('contact.form.title')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-primary-light text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-primary-light text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-primary-light text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-primary-light text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                    {t('contact.form.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-primary-light text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 rounded-lg text-green-800 dark:text-green-200">
                    Thank you! We'll get back to you within 24 hours.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 rounded-lg text-red-800 dark:text-red-200">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : t('contact.form.send')}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary dark:text-white">
                {t('contact.info.title')}
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <FiMail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary dark:text-white mb-1">{t('contact.info.email')}</h3>
                    <a href="mailto:info@kodai.si" className="text-neutral-600 dark:text-neutral-300 hover:text-accent">
                      info@kodai.si
                    </a>
                  </div>
                </div>



                <div className="flex items-start">
                  <FiMapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary dark:text-white mb-1">{t('contact.info.location')}</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      9000 Murska Sobota, Slovenija
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-100 dark:bg-primary-light p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-primary dark:text-white">
                  {t('contact.info.hours')}
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-300">
                  <p>{t('contact.info.monday')}</p>
                  <p>{t('contact.info.saturday')}</p>
                  <p>{t('contact.info.sunday')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
