import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { href: '/about', label: t('footer.aboutUs') },
      { href: '/services', label: t('footer.services') },
      { href: '/portfolio', label: t('footer.portfolio') },
    ],
    legal: [
      { href: '/privacy', label: t('footer.privacy') },
      { href: '/terms', label: t('footer.terms') },
      { href: '/contact', label: t('footer.contactTitle') },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-accent">Kod</span>
              <span className="text-white">AI</span>
            </div>
            <p className="text-neutral-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactTitle')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-neutral-300">
                <FiMail className="mt-1 flex-shrink-0" size={18} />
                <a href="mailto:info@kodai.si" className="hover:text-accent transition-colors">
                  info@kodai.si
                </a>
              </li>
              <li className="flex items-start space-x-3 text-neutral-300">
                <FiMapPin className="mt-1 flex-shrink-0" size={18} />
                <span>9000 Murska Sobota, Slovenija</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-light text-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} KodAI. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
