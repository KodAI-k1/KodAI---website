import React, { useState } from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Button from '@/components/Button';
import { generatePageSEO } from '@/lib/seo';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  const seoData = generatePageSEO('contact');
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
              Get Your Free Automation Audit
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Let's discuss how AI automation can transform your business. Book a free consultation today.
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
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300">
                    Name *
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
                    Email *
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
                    Phone
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
                    Company
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
                    Message *
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
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary dark:text-white">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <FiMail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary dark:text-white mb-1">Email</h3>
                    <a href="mailto:contact@kodai.com" className="text-neutral-600 dark:text-neutral-300 hover:text-accent">
                      contact@kodai.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiPhone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary dark:text-white mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-neutral-600 dark:text-neutral-300 hover:text-accent">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiMapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-primary dark:text-white mb-1">Location</h3>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      123 AI Street<br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-100 dark:bg-primary-light p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-3 text-primary dark:text-white">
                  Business Hours
                </h3>
                <div className="space-y-2 text-neutral-600 dark:text-neutral-300">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
