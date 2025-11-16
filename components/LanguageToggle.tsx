import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sl' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 dark:bg-primary-light text-primary dark:text-white hover:bg-neutral-200 dark:hover:bg-primary transition-colors duration-200"
      aria-label="Toggle language"
      title={language === 'en' ? 'Switch to Slovenian' : 'Switch to English'}
    >
      <span className="text-sm font-bold">
        {language === 'en' ? 'SL' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
