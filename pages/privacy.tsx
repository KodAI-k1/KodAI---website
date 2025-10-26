import React from 'react';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';

export default function Privacy() {
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
              Privacy Policy
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
                At KodAI, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Company information</li>
                <li>Communication preferences</li>
                <li>Information you provide in forms or correspondence</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our services and website</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">Data Protection</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at privacy@kodai.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
