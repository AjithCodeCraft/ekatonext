import { Outlet } from 'react-router-dom';
import { ResponsiveNavigation } from './ResponsiveNavigation';
import { UniversalFooter } from './UniversalFooter';
import {  Phone, Sparkles, User } from 'lucide-react';
import { HomeNavButton } from '../HomeNavButtons';

// Main navigation items
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
  }
];

// More compact Logo component
const Logo = () => (
  <img 
    src="/logoeka.png" 
    alt="ekaBrahmaa Logo"
    className="max-h-14 mb-4" 
  />
);
// More compact CTA Buttons
const CTAButtons = () => (
  <div className="flex items-center gap-1.5 md:gap-3">
    <HomeNavButton
      label="Take Quiz"
      href="/quiz"
      icon={<Sparkles className="w-3.5 h-3.5" />}
      ariaLabel="Take the dosha quiz to discover your constitution"
      className="border-teal-300 text-white-700 hover:bg-teal-50"
      
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

export function ResponsiveLayout() {
  return (
    <div className="min-h-screen flex flex-col">
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
      
      <UniversalFooter  />
    </div>
  );
}