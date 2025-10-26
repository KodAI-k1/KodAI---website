import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  client: string;
  description: string;
  image: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  tags?: string[];
  href: string;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  client,
  description,
  image,
  metrics,
  tags,
  href,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link href={href} className="block h-full group">
        <div className="h-full bg-white dark:bg-primary-light rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-accent dark:hover:border-accent">
          {/* Image */}
          <div className="relative h-48 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <div className="text-sm text-accent font-semibold mb-2 uppercase tracking-wide">
              {client}
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-primary dark:text-white group-hover:text-accent transition-colors">
              {title}
            </h3>
            
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
              {description}
            </p>
            
            {/* Metrics */}
            {metrics && metrics.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mb-4 py-4 border-t border-neutral-200 dark:border-neutral-700">
                {metrics.map((metric, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-accent">{metric.value}</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <div className="text-accent font-semibold group-hover:underline">
              View Case Study →
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseStudyCard;
