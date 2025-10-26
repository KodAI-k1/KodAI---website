import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-neutral-300">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <div className="text-neutral-700 dark:text-neutral-300 space-y-6">
              <p>
                Welcome to KodAI. By accessing our website and using our services, you agree to be bound by these Terms of Service.
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use our services in any way that violates applicable laws</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use our services for any harmful or malicious purposes</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">Intellectual Property</h2>
              <p>
                All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks, are the property of or licensed to KodAI and are protected by law.
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">Limitation of Liability</h2>
              <p>
                KodAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page.
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us at legal@kodai.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
