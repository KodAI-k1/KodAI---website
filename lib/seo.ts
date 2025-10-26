export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
}

export const defaultSEO: SEOData = {
  title: 'KodAI - AI Automation Agency | Streamline Your Business',
  description:
    'Transform your business with intelligent automation solutions. KodAI delivers custom AI workflows that reduce manual work, cut costs, and boost efficiency.',
  ogImage: '/images/og-image.jpg',
  ogType: 'website',
};

export const generatePageSEO = (pageName: string, customData?: Partial<SEOData>): SEOData => {
  const seoTemplates: Record<string, Partial<SEOData>> = {
    home: {
      title: 'KodAI - AI Automation Agency | Streamline Your Business',
      description:
        'Transform your business with intelligent automation solutions. KodAI delivers custom AI workflows that reduce manual work, cut costs, and boost efficiency.',
    },
    about: {
      title: 'About KodAI - AI Automation Experts',
      description:
        'Learn about KodAI\'s mission to revolutionize business operations through intelligent automation. Meet our team of AI specialists dedicated to your success.',
    },
    services: {
      title: 'AI Automation Services - KodAI',
      description:
        'Explore our comprehensive AI automation services including workflow optimization, data processing, customer service automation, and custom AI solutions.',
    },
    portfolio: {
      title: 'Case Studies & Portfolio - KodAI Success Stories',
      description:
        'Discover how KodAI has helped businesses achieve measurable results through AI automation. Real case studies with proven ROI and efficiency gains.',
    },
    contact: {
      title: 'Contact KodAI - Get Your Free Automation Audit',
      description:
        'Ready to transform your business with AI automation? Contact KodAI for a free consultation and discover how we can streamline your operations.',
    },
  };

  return {
    ...defaultSEO,
    ...seoTemplates[pageName],
    ...customData,
  };
};

export const generateOrganizationSchema = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kodai.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KodAI',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description:
      'AI Automation Agency specializing in intelligent workflow optimization and business process automation.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@kodai.com',
      telephone: '+1-234-567-890',
    },
    sameAs: [
      'https://twitter.com/kodai',
      'https://linkedin.com/company/kodai',
      'https://github.com/kodai',
    ],
  };
};
