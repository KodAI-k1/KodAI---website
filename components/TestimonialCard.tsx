import React from 'react';
import { FiStar } from 'react-icons/fi';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  rating,
}) => {
  return (
    <div className="bg-white dark:bg-primary-light rounded-xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 h-full">
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <FiStar
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-accent fill-accent' : 'text-neutral-300 dark:text-neutral-600'
            }`}
          />
        ))}
      </div>
      
      {/* Content */}
      <p className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed italic">
        "{content}"
      </p>
      
      {/* Author */}
      <div className="flex items-center pt-4 border-t border-neutral-200 dark:border-neutral-700">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <div className="font-semibold text-primary dark:text-white">{name}</div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {role} at {company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
