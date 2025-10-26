import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
  href?: string;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
  features,
}) => {
  const CardContent = (
    <div className="h-full bg-white dark:bg-primary-light rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 hover:border-accent dark:hover:border-accent group">
      <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
        <Icon size={28} />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-primary dark:text-white group-hover:text-accent transition-colors">
        {title}
      </h3>
      
      <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
        {description}
      </p>
      
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-neutral-600 dark:text-neutral-400">
              <span className="text-accent mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      {href && (
        <div className="mt-6">
          <span className="text-accent font-semibold group-hover:underline">
            Learn More →
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Link href={href} className="block h-full">
          {CardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      {CardContent}
    </motion.div>
  );
};

export default ServiceCard;
