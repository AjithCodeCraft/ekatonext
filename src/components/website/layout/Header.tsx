import { Outlet } from 'react-router-dom';
import { ResponsiveNavigation } from './ResponsiveNavigation';
import { UniversalFooter } from './UniversalFooter';
import { Leaf, Phone, Sparkles, User } from 'lucide-react';
import { HomeNavButton } from '../HomeNavButtons';

// Main navigation items - same as ResponsiveLayout
const navigationItems = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'What We Heal',
    href: '/what-we-heal',
  },
  {
    title: 'Our Approach',
    href: '/approach',
    children: [
      { title: 'Five Healers System', href: '/approach/five-healers' },
      { title: 'Daily Rituals', href: '/approach/daily-rituals' }
    ]
  },
  {
    title: 'Programs',
    href: '/programs',
    children: [
      { title: 'ekaPavana', href: '/programs/ekapavana' },
      { title: 'ekaSanskara', href: '/programs/ekasanskara' },
      { title: 'ekaSamanvaya', href: '/programs/ekasamanvaya' }
    ]
  },
  {
    title: 'Stories',
    href: '/stories'
  },
  {
    title: 'Talk to Healer',
    href: '/talk-to-healer'
  }
];

// Logo component - same as ResponsiveLayout
const Logo = () => (
  <div className="flex items-center gap-2">
    <div 
      className="bg-gradient-to-r from-teal-600 to-pink-400 rounded-full flex items-center justify-center shadow-sm group-hover:shadow transition-all duration-300 group-hover:scale-105 w-8 h-8 md:w-9 md:h-9"
    >
      <Leaf className="text-white w-4 h-4 md:w-5 md:h-5" />
      
    </div>
    <div className="hidden sm:block">
      <span 
        className="font-serif font-bold text-teal-800 group-hover:text-teal-900 transition-colors text-lg md:text-xl"
        style={{ letterSpacing: '0.3px' }}
      >
        ekaBrahmaa
      </span>
      <p className="text-[0.65rem] text-teal-600 -mt-0.5 font-medium">One Source • Infinite Healing</p>
    </div>
  </div>
);

// CTA Buttons - same as ResponsiveLayout
const CTAButtons = () => (
  <div className="flex items-center gap-1.5 md:gap-3">
    <HomeNavButton
      label="Take Quiz"
      href="/quiz"
      icon={<Sparkles className="w-3.5 h-3.5" />}
      ariaLabel="Take the dosha quiz to discover your constitution"
    />
    <HomeNavButton
      label="Talk to Healer"
      href="/talk-to-healer"
      icon={<Phone className="w-3.5 h-3.5" />}
      ariaLabel="Book a free consultation with our healers"
      primary
    />
    <HomeNavButton
      label="Login"
      href="/login"
      icon={<User className="w-3.5 h-3.5" />}
      primary
    />
  </div>
);

export function Header() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ResponsiveNavigation 
        items={navigationItems} 
        logo={<Logo />}
        ctaButtons={<CTAButtons />}
        compact
      />
      
      <main className="flex-1 py-6 md:py-8 px-4 sm:px-5 max-w-6xl w-full mx-auto">
        <div className="bg-white rounded-lg shadow-xs p-4 md:p-6">
          <Outlet />
        </div>
      </main>
      
      <UniversalFooter />
    </div>
  );
}