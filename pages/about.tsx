import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import Button from '@/components/Button';
import { generatePageSEO } from '@/lib/seo';

export default function About() {
  const seoData = generatePageSEO('about');

  return (
    <Layout>
      <SEO {...seoData} />
      
      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-gradient-to-br from-primary via-primary-light to-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About KodAI
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed mt-6">
              At KodAI, we use AI to give small business owners back their most valuable resource: time. 
              By streamlining repetitive tasks and automating day-to-day operations, we help entrepreneurs 
              work smarter, reduce stress, and focus on growing their business and delighting their customers. 
              Our goal is simple—to make running a small business easier, more efficient, and more rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Get a free automation audit and discover how AI can save you time and money.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Book Free Consultation
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
