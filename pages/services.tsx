import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { generatePageSEO } from '@/lib/seo';
import { FiZap, FiTrendingUp, FiUsers, FiCpu, FiDatabase, FiSettings } from 'react-icons/fi';

export default function Services() {
  const seoData = generatePageSEO('services');

  const services = [
    {
      title: 'AI Workflow Automation',
      description: 'Streamline repetitive tasks and optimize business processes with intelligent automation solutions that save time and reduce errors.',
      icon: FiZap,
      features: [
        'Process optimization and mapping',
        'Task automation and scheduling',
        'System integration and API connections',
        'Custom workflow development'
      ],
    },
    {
      title: 'Data Processing & Analysis',
      description: 'Transform raw data into actionable insights with AI-powered analytics, visualization, and predictive modeling.',
      icon: FiTrendingUp,
      features: [
        'Data collection and cleaning',
        'Predictive modeling and forecasting',
        'Real-time reporting dashboards',
        'Business intelligence solutions'
      ],
    },
    {
      title: 'Customer Service Automation',
      description: 'Enhance customer experience with AI chatbots, automated support systems, and intelligent routing.',
      icon: FiUsers,
      features: [
        'AI chatbot development',
        '24/7 automated support',
        'Multi-channel integration',
        'Natural language processing'
      ],
    },
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI applications designed specifically for your unique business needs and industry requirements.',
      icon: FiCpu,
      features: [
        'Custom model development',
        'API integration services',
        'Scalable architecture design',
        'Ongoing maintenance and support'
      ],
    },
    {
      title: 'Document Processing',
      description: 'Automate document handling with intelligent OCR, data extraction, and classification systems.',
      icon: FiDatabase,
      features: [
        'Invoice and receipt processing',
        'Contract analysis and extraction',
        'Form digitization',
        'Compliance and validation'
      ],
    },
    {
      title: 'Process Optimization',
      description: 'Identify bottlenecks and inefficiencies in your operations and implement AI-driven improvements.',
      icon: FiSettings,
      features: [
        'Workflow analysis and mapping',
        'Efficiency improvement plans',
        'Change management support',
        'Performance monitoring'
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
              AI Automation Services
            </h1>
            <p className="text-xl text-neutral-300 leading-relaxed">
              Comprehensive solutions to transform your business operations, reduce costs, and scale efficiently.
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
              Our Process
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-primary rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  Free Consultation
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  We start with a free discovery call to understand your challenges and identify automation opportunities.
                </p>
              </div>
              
              <div className="bg-white dark:bg-primary rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  Custom Proposal
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Receive a detailed proposal with ROI projections, timeline, and clear deliverables.
                </p>
              </div>
              
              <div className="bg-white dark:bg-primary rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  Development & Testing
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  We build your solution with regular check-ins and thorough testing before deployment.
                </p>
              </div>
              
              <div className="bg-white dark:bg-primary rounded-xl p-6 border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">
                  Launch & Support
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Seamless deployment with training and ongoing support to ensure long-term success.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Book a free consultation to discover how AI automation can transform your business.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
