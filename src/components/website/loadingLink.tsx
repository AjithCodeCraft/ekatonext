import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { type MouseEvent, type ReactNode } from 'react';

interface LoadingLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  className?: string;
  replace?: boolean;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
}

export function LoadingLink({
  to,
  children,
  className,
  replace = false,
  onClick,
  target,
  rel,
  ...props
}: LoadingLinkProps) {
  const navigate = useNavigate();
  const [_, setIsLoading] = useState(false);

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    // Call custom onClick handler if provided
    onClick?.(e);

    // Don't trigger loading for external links or if default was prevented
    if (e.defaultPrevented || target === '_blank' || to.startsWith('http')) {
      return;
    }

    // Check if it's a different route
    const currentPath = window.location.pathname;
    const linkPath = to.split('?')[0].split('#')[0];

    if (linkPath !== currentPath) {
      e.preventDefault(); // Prevent the default navigation
      setIsLoading(true); // Set loading state to true
      
      try {
        // Track navigation event
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_navigation', {
            from_path: currentPath,
            to_path: linkPath
          });
        }
        
        // Simulate loading delay with a promise
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Navigate to the new route
        navigate(to, { replace });
      } catch (error) {
        console.error('Navigation error:', error);
        // Fallback to regular navigation in case of error
        window.location.href = to;
      } finally {
        setIsLoading(false); // Reset loading state after navigation
      }
    }
  };

  return (
    <>
      <Link
        to={to}
        className={className}
        replace={replace}
        onClick={handleClick}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </Link>

    </>
  );
}
