import { ArrowRight, ExternalLink } from 'lucide-react';
import { LoadingLink } from './loadingLink';
import { Link as RouterLink } from 'react-router-dom';

interface HomeNavButtonProps {
  primary?: boolean;
  label: string;
  href: string;
  icon?: React.ReactNode;
  ariaLabel?: string;
  external?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  trackingCategory?: string;
  noLoading?: boolean;
  className?: string;
}

export function HomeNavButton({
  primary = false,
  label,
  href,
  icon,
  ariaLabel,
  external = false,
  onClick,
  trackingCategory = 'navigation',
  noLoading = false,
  className = '',
}: HomeNavButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    
    try {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'button_click', {
          button_label: label,
          destination: href,
          category: trackingCategory
        });
      }
    } catch (error) {
      console.error('Analytics error:', error);
    }
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 ${className}`;

  const primaryClasses = `bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 md:px-6 md:py-3`;

  const secondaryClasses = `border-2 border-teal-300 text-teal-100 hover:bg-teal-800 px-5 py-2.5 md:px-6 md:py-3`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || `${label} (opens in new tab)`}
        onClick={handleClick}
        className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
      >
        {icon && <span>{icon}</span>}
        <span>{label}</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    );
  }

  const LinkComponent = noLoading ? RouterLink : LoadingLink;

  return (
    <LinkComponent
      to={href}
      aria-label={ariaLabel || label}
      onClick={handleClick}
      className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}
    >
      {icon && <span>{icon}</span>}
      <span>{label}</span>
      {primary && <ArrowRight className="w-4 h-4" />}
    </LinkComponent>
  );
}

export function HomepageExternalButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
      <HomeNavButton
        primary
        label="Visit Our Blog"
        href="https://blog.ekabrahmaa.com"
        external
        ariaLabel="Visit our blog for Ayurvedic wisdom"
        trackingCategory="external_link"
      />
      
      <HomeNavButton
        label="Community Forum"
        href="https://community.ekabrahmaa.com"
        external
        ariaLabel="Join our healing community forum"
        trackingCategory="external_link"
      />
    </div>
  );
}