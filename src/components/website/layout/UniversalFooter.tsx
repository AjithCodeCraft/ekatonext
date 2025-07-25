'use client';

import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Shield,
  Award,
  Users
} from 'lucide-react';

export function UniversalFooter() {
  return (
    <footer className="bg-teal-900 text-teal-50 border-t border-teal-800 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">

          {/* Column 1: Company Overview */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/logoeka.png"
                alt="ekaBrahmaa Logo"
                className="max-h-14"
              />
            </Link>

            <p className="text-teal-100 text-sm leading-relaxed">
              Unlike anything you've seen before — ekaBrahmaa brings Ayurveda, Nutrition, Yoga, Psychology, and Functional Movement together, so you don't heal alone — you heal in harmony.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/company/ekabrahmaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-teal-700 hover:text-white text-teal-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ekabrahmaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-teal-700 hover:text-white text-teal-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ekabrahmaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-teal-700 hover:text-white text-teal-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/ekabrahmaa"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-teal-700 hover:text-white text-teal-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative pb-2">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500" />
            </h3>
            <ul className="space-y-3">
              {[
                { title: 'Home', href: '/' },
                { title: 'What We Heal', href: '/what-we-heal' },
                { title: 'Our Approach', href: '/approach' },
                { title: 'Our Programs', href: '/programs' },
                { title: 'Healing Stories', href: '/stories' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-teal-100 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 hover:font-medium inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support and Community */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative pb-2">
              Support & Community
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500" />
            </h3>
            <ul className="space-y-3">
              {[
                { title: 'Talk to ekaSathi', href: '/' },
                { title: 'Join ekaTribe', href: '/what-we-heal' },
                { title: 'Refer a Friend', href: '/approach' },
                { title: 'Contact', href: '#still-have-questions' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-teal-100 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 hover:font-medium inline-block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Our Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white relative pb-2">
              Our Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500" />
            </h3>
            <ul className="space-y-3">
              {[
                { title: 'Talk to Healer', href: '/services/ayurveda' },
                { title: 'ekaAlayaa Programs', href: '/services/nutrition' },
                { title: 'Womens Health', href: '/services/yoga' },
                { title: 'Mental Wellbeing', href: '/services/fitness' },
                { title: '21-day Program', href: '/services/psychology' },
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-teal-100 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 hover:font-medium inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white relative pb-2">
              Contact Info
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500" />
            </h3>

            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="leading-tight">
                  <div className="text-white text-sm font-medium">Office Address</div>
                  <div className="text-teal-100 text-sm">Trivandrum, Kerala, India</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="leading-tight">
                  <div className="text-white text-sm font-medium">Email Address</div>
                  <a href="mailto:care@ekabrahmaa.com" className="text-teal-100 hover:text-white text-sm">
                    care@ekabrahmaa.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="leading-tight">
                  <div className="text-white text-sm font-medium">Phone Number</div>
                  <a href="tel:+916282841859" className="text-teal-100 hover:text-white text-sm">
                    +91 62828 41859
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div className="leading-tight">
                  <div className="text-white text-sm font-medium">Business Hours</div>
                  <div className="text-teal-100 text-sm">Mon-Sat: 9:00 AM - 7:00 PM IST</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-teal-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Shield className="w-6 h-6" />, text: 'HIPAA Compliant' },
              { icon: <Award className="w-6 h-6" />, text: 'Certified Practitioners' },
              { icon: <Users className="w-6 h-6" />, text: '10,000+ Healed' },
              { icon: <Heart className="w-6 h-6" />, text: '24/7 Support' }
            ].map((indicator, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-teal-800/50 text-teal-400 group-hover:bg-teal-700 group-hover:text-white">
                  {indicator.icon}
                </div>
                <span className="text-teal-100 text-sm font-medium">
                  {indicator.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-teal-950 border-t border-teal-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-teal-300 text-sm">
                &copy; 2025 Revita Ayurveda Private Limited. All content protected under love, law and legacy.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              {[
                { title: 'Privacy Policy', href: '/privacy' },
                { title: 'Terms & Conditions', href: '/terms' },
                { title: 'Medical Disclaimer', href: '/disclaimer' },
                { title: 'Sitemap', href: '/sitemap' }
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-teal-300 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}